import inventory from '../data/inventory';
import stores from '../data/stores';

const sortedRules = (rules) => [...rules].sort((a, b) => a.priority - b.priority);

export const getInventoryQty = (sku, storeId) => {
  const match = inventory.find(inv => inv.sku === sku && inv.location_id === storeId);
  return match ? match.quantity : 0;
};

export const findFallbackStore = (sku) => {
  return stores.find((store) => {
    const inv = inventory.find(
      (inv) => inv.sku === sku && inv.location_type === "store" && inv.location_id === store.store_id
    );
    return inv && inv.quantity < 30;
  });
};

const evaluateCondition = (condition, order, dropOffStore) => {
  if (!condition) return false;
  const { field, operator, value } = condition;

  let actualValue;

  if (field === "inventory_quantity") {
    actualValue = getInventoryQty(order.items[0].sku, dropOffStore?.store_id);
  } else if (field === "unit_price") {
    actualValue = order.items?.[0]?.unit_price;
  } else {
    actualValue = order[field];
  }

  switch (operator) {
    case "equals":
      return actualValue === value;
    case "greater_than":
      return actualValue > value;
    case "less_than":
      return actualValue < value;
    case "older_than_days": {
      const orderDate = new Date(order.order_date.split("-").reverse().join("-"));
      const today = new Date();
      const diffInDays = (today - orderDate) / (1000 * 3600 * 24);
      return diffInDays > value;
    }
    default:
      return false;
  }
};

export const applyRules = (order, rules, warehouses, initialDropOffStore) => {
  let dropOffStore = initialDropOffStore;
  const steps = [];
  const triggeredRules = [];  // For storing triggered rules
  let refundStepExists = false;
  let routedToDC = false;
  let routedToRepairsDC = false;
  let repairsDC = null;
  let blocked = false;
  let pendingApproval = false;

  for (const rule of sortedRules(rules)) {
    // If a routing decision is already made, skip any additional routing rules:
    const currentActionType = rule.action.type.trim().toLowerCase();
    if ((routedToRepairsDC || routedToDC) &&
        (currentActionType === "route_to_repairs" || currentActionType === "route_to_store" || currentActionType === "route_to_dc")) {
      continue;
    }
  
    const match = evaluateCondition(rule.condition, order, dropOffStore);
    if (!match) continue;
  
    console.log("✅ Rule matched:", rule.name, "| Action:", rule.action.type);
  
    // Add the rule immediately to the list of triggered rules:
    triggeredRules.push(rule);
  
    // For rules other than "route_to_store", push a step.
    if (currentActionType !== "route_to_store") {
      steps.push({
        label: "Rule Triggered",
        icon: rule.action.icon,
        detail: rule.action.message
      });
    }
  
    if (currentActionType === "block_return") {
      blocked = true;
      break;
    }
  
    if (currentActionType === "require_manual_approval") {
      pendingApproval = true;
      console.log("🛑 Manual approval required — stopping further rule evaluation");
      break;
    }
  
    switch (currentActionType) {
      case "auto_refund":
        refundStepExists = true;
        break;
      case "route_to_repairs":
        routedToRepairsDC = true;
        repairsDC = warehouses.find(wh =>
          wh.warehouse_name.toLowerCase().includes("repair")
        ) || warehouses[0];
        break;
      case "route_to_store": {
        const currentQty = getInventoryQty(order.items[0].sku, dropOffStore.store_id);
        const fallback = findFallbackStore(order.items[0].sku);
  
        if (currentQty < rule.condition.value) {
          if (fallback && fallback.store_id !== dropOffStore.store_id) {
            steps.push({
              label: "Rule Triggered",
              icon: rule.action.icon,
              detail: `${rule.action.message}: ${fallback.store_name}`
            });
            dropOffStore = fallback;
          } else {
            steps.push({
              label: "Rule Triggered",
              icon: "🏢",
              detail: `No store with low inventory found — routing to DC`
            });
            routedToDC = true;
          }
        } else {
          steps.push({
            label: "Rule Triggered",
            icon: "🏢",
            detail: `Store inventory is sufficient — routing to DC`
          });
          routedToDC = true;
        }
  
        break;
      }
      case "route_to_dc":
        routedToDC = true;
        break;
    }
  }

  return {
    steps,
    triggeredRules,  // This will be used to update rulesTriggered in your return record
    blocked,
    refundStepExists,
    routedToDC,
    routedToRepairsDC,
    repairsDC,
    dropOffStore,
    pendingApproval
  };
};