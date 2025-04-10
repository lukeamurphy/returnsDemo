// simulationEngine.js
import { applyRules } from './ruleEngine';

export async function runSimulation(selectedOrders, rules, sampleData, setRunning, setActiveSteps, setCurrentStepIndex, setReturns, setHistory) {
  setRunning(true);

  for (let orderId of selectedOrders) {
    const order = sampleData.orders.find(o => o.order_id === orderId);
    const carrier = sampleData.carriers[0] || { name: "Default Carrier" };
    const item = order.items[0];
    const initialDropOffStore = sampleData.stores[0];

    order.testReason = order.testReason ?? "other";

    const steps = [{ label: "Return Initiated", icon: "🧾", detail: `Order ID: ${order.order_id}` }];

    const result = applyRules(order, rules, sampleData.warehouses, initialDropOffStore);
    steps.push(...result.steps);

    if (result.blocked || result.pendingApproval) {
      if (result.pendingApproval) {
        steps.push({ label: "Awaiting Approval", icon: "⏳", detail: "Return pending approval" });
      }
      await processSteps(
        steps,
        setCurrentStepIndex,
        setActiveSteps,
        setReturns,
        order,
        item,
        result,
        initialDropOffStore,
        carrier,
        setHistory
      );      continue;
    }

    if (!result.blocked) {
      steps.push({
        label: "Drop-Off at Store",
        icon: "📦",
        detail: `Store: ${result.dropOffStore.store_name}`
      });
      steps.push({
        label: "Transportation",
        icon: "🚚",
        detail: "Item transported"
      });
      // Update the "Return Processed" step based on the route decision:
      if (result.routedToRepairsDC && result.repairsDC) {
        steps.push({
          label: "Return Processed",
          icon: "🔍",
          detail: `Processed at Repairs DC: ${result.repairsDC.warehouse_name}`
        });
      } else if (result.routedToDC) {
        steps.push({
          label: "Return Processed",
          icon: "🔍",
          detail: "Processed at DC"
        });
      } else {
        // Optional fallback if no routing decision was made:
        steps.push({
          label: "Return Processed",
          icon: "🔍",
          detail: "Processed"
        });
      }
      // Only add the refund step if a refund step wasn't already executed
      if (!result.refundStepExists) {
        steps.push({
          label: "Refund Issued",
          icon: "💸",
          detail: `Refund for ${item.name}`
        });
      }
    }

    
    await processSteps(
      steps,
      setCurrentStepIndex,
      setActiveSteps,
      setReturns,
      order,
      item,
      result,
      initialDropOffStore, // ✅ pass it here
      carrier,
      setHistory
    ); }

  setRunning(false);
}

async function processSteps(
  steps,
  setCurrentStepIndex,
  setActiveSteps,
  setReturns,
  order,
  item,
  result,
  dropOffStore, // passed from runSimulation (initialDropOffStore)
  carrier,
  setHistory
) {
  // Instead of resetting for each order, we increment the global counter.
  for (let i = 0; i < steps.length; i++) {
    setCurrentStepIndex(prev => prev + 1); // cumulative progress
    setActiveSteps(prev => [...prev, steps[i]]);
    await new Promise(res => setTimeout(res, 600));
  }

  const returnRecord = {
    id: `${order.order_id}-${Date.now()}`,
    orderId: order.order_id,
    customer: order.customer_name,
    item: {
      sku: item.sku,
      name: item.name,
      quantity: item.quantity,
      unit_price: item.unit_price,
    },
    reason: order.testReason,
    dropOffStore: {
      id: dropOffStore.store_id,
      name: dropOffStore.store_name,
    },
    destination: result.repairsDC
      ? {
          type: 'repairs',
          name: result.repairsDC.warehouse_name,
          location: result.repairsDC.location,
        }
      : result.routedToDC
      ? {
          type: 'dc',
          name: result.dc?.warehouse_name ?? '',
          location: result.dc?.location ?? '',
        }
      : result.routedToStore
      ? {
          type: 'store',
          name: result.routedStore?.store_name ?? '',
          location: result.routedStore?.location ?? '',
        }
      : {
          type: 'none',
          name: '',
          location: '',
        },
    blocked: result.blocked || false,
    pendingApproval: result.pendingApproval || false,
    refunded: result.refundStepExists || steps.some(s => s.label === 'Refund Issued'),
    rulesTriggered: result.triggeredRules?.map(r => r.name) ?? [],
    value: item.unit_price,
    carrier: carrier.carrier_name,
    timestamp: new Date().toISOString(),
    steps,
  };

  console.log("Return Record:", returnRecord);
  setReturns(prev => [...prev, returnRecord]);
  setHistory(prev => [...prev, steps]);

  setActiveSteps([]);
}