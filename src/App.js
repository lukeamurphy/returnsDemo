import React, { useState } from "react";
import orders from './data/orders';
import skus from './data/skus';
import stores from './data/stores';
import warehouses from './data/warehouses';
import inventory from './data/inventory';
import carriers from './data/carriers';
import ConfigBox from './configBox';
import logo from "./by-logo.png";


const applyRules = (order, rules, warehouses, initialDropOffStore) => {
  let dropOffStore = initialDropOffStore;
  const steps = [];
  let blocked = false;
  let refundStepExists = false;
  let routedToDC = false;
  let routedToRepairsDC = false;
  let repairsDC = null;

  for (const rule of rules) {
    const match = evaluateCondition(rule.condition, order, dropOffStore);
    if (!match) continue;
    // Skip other routing if already routed to repairs
    if (routedToRepairsDC && ["route_to_store", "route_to_dc"].includes(rule.action.type)) {
      continue;
    }

    if (rule.action.type !== "route_to_store") {
      steps.push({
        label: "Rule Triggered",
        icon: rule.action.icon,
        detail: rule.action.message
      });
    }
    if (rule.action.type === "block_return") {
      blocked = true;
      break; // Stop evaluating further rules
    }

    switch (rule.action.type) {
      // Removed block_return case as it is handled above
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
        
        // Always trigger a rule response
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

  return { steps, blocked, refundStepExists, routedToDC, routedToRepairsDC, repairsDC, dropOffStore };
};

const evaluateCondition = (condition, order, dropOffStore) => {
  if (!condition) return false;
  const { field, operator, value } = condition;

  let actualValue;

  if (field === "inventory_quantity") {
    actualValue = getInventoryQty(order.items[0].sku, dropOffStore?.store_id);
  } else {
    actualValue = order[field];
  }

  switch (operator) {
    case "equals":
      return actualValue === value;
    case "older_than_days":
      const orderDate = new Date(order.order_date.split("-").reverse().join("-"));
      const today = new Date();
      const diffInDays = (today - orderDate) / (1000 * 3600 * 24);
      return diffInDays > value;
    case "less_than":
      return actualValue < value;
    default:
      return false;
  }
};

const getInventoryQty = (sku, storeId) => {
  const match = inventory.find(inv => inv.sku === sku && inv.location_id === storeId);
  return match ? match.quantity : 0;
};

const findFallbackStore = (sku) => {
  return stores.find((store) => {
    const inv = inventory.find(
      (inv) => inv.sku === sku && inv.location_type === "store" && inv.location_id === store.store_id
    );
    return inv && inv.quantity < 30;
  });
};

export const HeroHeader = () => (
  <div className="w-full bg-white shadow px-6 py-8 mb-10 relative">
    {/* Blue Yonder Logo - Aligned Left */}
    <div className="absolute left-6 top-1/2 -translate-y-1/2">
      <img src={logo} alt="Blue Yonder Logo" className="h-10 md:h-12" />
    </div>

    {/* Centered Title + Subtitle */}
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight mb-1">
        Returns Simulation App
      </h1>
      <p className="text-gray-600 text-base md:text-lg">
        Design and simulate intelligent return flows
      </p>
    </div>
  </div>
);

const TabView = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex mb-3 space-x-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1 text-sm rounded ${
              i === activeTab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};


const sampleData = {
  orders,
  skus,
  stores,
  warehouses,
  carriers,
  inventory,
  rules: [
    {
      name: "Block if Order Older Than 30 Days",
      key: "blockIfOrderOlderThan30Days",
      condition: {
        field: "order_date",
        operator: "older_than_days",
        value: 30
      },
      action: {
        type: "block_return",
        message: "Return not allowed: Order is older than 30 days.",
        icon: "⛔"
      }
    },
    {
      name: "Auto Refund for Loyalty Customers",
      key: "loyaltyAutoRefund",
      condition: {
        field: "is_loyalty",
        operator: "equals",
        value: true
      },
      action: {
        type: "auto_refund",
        message: "Loyalty customer — instant refund issued",
        icon: "💸"
      }
    },
    {
      name: "Route to Repairs if Damaged",
      key: "routeIfDamaged",
      condition: {
        field: "testReason",
        operator: "equals",
        value: "damaged"
      },
      action: {
        type: "route_to_repairs",
        message: "Item routed to repairs DC",
        icon: "🛠️"
      }
    },
    {
      name: "Route Based on Store Inventory",
      key: "routeBasedOnStoreInventory",
      condition: {
        field: "inventory_quantity",
        operator: "less_than",
        value: 30
      },
      action: {
        type: "route_to_store",
        message: "Routed to store with low inventory",
        icon: "🏬"
      }
    }
  ],
  workflows: [
    {
      name: "Strict Return Policy",
      ruleKeys: ["blockIfOrderOlderThan30Days"]
    },
    {
      name: "Damage Routing",
      ruleKeys: ["routeIfDamaged"]
    },
    {
      name: "Routing Workflow",
      ruleKeys: ["routeBasedOnStoreInventory"]
    },
    {
      name: "Loyalty Auto Refund",
      ruleKeys: ["loyaltyAutoRefund"]
    }
  ]
};

export default function App() {
  const [expandedSections, setExpandedSections] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [activeSteps, setActiveSteps] = useState([]);
  const [history, setHistory] = useState([]);
  const [running, setRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleOrderCheckboxChange = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]
    );
  };

  const runSimulation = async () => {
    for (let orderId of selectedOrders) {
      const order = sampleData.orders.find(o => o.order_id === orderId);
      const carrier = sampleData.carriers.length > 0 ? sampleData.carriers[0] : { name: "Default Carrier" };
      const item = order.items[0];
      const initialDropOffStore = sampleData.stores[0];
  
      order.testReason = order.testReason ?? "other";
  
      const steps = [
        {
          label: "Return Initiated",
          icon: "🧾",
          detail: `Order ID: ${order.order_id}\nCustomer: ${order.customer_name}\nItem: ${item.name}\nReason: ${order.testReason}`
        }
      ];
  
      const ruleKeys = [...new Set(sampleData.workflows.flatMap(wf => wf.ruleKeys))];
      const activeRules = sampleData.rules.filter(rule => ruleKeys.includes(rule.key));
  
      const result = applyRules(order, activeRules, sampleData.warehouses, initialDropOffStore);
      steps.push(...result.steps);
      
      // Only apply fallback routing if not blocked and no store reroute has occurred
      if (
        !result.blocked &&
        !result.routedToRepairsDC &&
        !result.routedToDC &&
        result.dropOffStore?.store_id === initialDropOffStore.store_id
      ) {
        result.routedToDC = true;
        steps.push({
          label: "Rule Triggered",
          icon: "🏢",
          detail: "Default routing applied — item routed to DC"
        });
      }
  
      if (!result.blocked) {
        steps.push({
          label: "Drop-Off at Store",
          icon: "📦",
          detail: `Store: ${result.dropOffStore.store_name}\nAddress: ${result.dropOffStore.location}`
        });
  
        if (result.routedToRepairsDC && result.repairsDC) {
          steps.push({
            label: "Transportation",
            icon: "🚚",
            detail: `Item sent to Repairs DC: ${result.repairsDC.warehouse_name} via ${carrier.carrier_name}`
          });
  
          steps.push({
            label: "Return Processed",
            icon: "🔍",
            detail: "Damaged item inspected and queued for repair"
          });
        } else if (result.routedToDC) {
          steps.push({
            label: "Transportation",
            icon: "🚚",
            detail: `Item is being transported to the DC via ${carrier.carrier_name}`
          });
  
          steps.push({
            label: "Return Processed",
            icon: "🔍",
            detail: "Item has been received and processed at the DC"
          });
        }
  
        // Refund is always shown last unless it already happened
        if (!result.refundStepExists) {
          steps.push({
            label: "Refund Issued",
            icon: "💸",
            detail: `Refund for ${item.name} ($${item.unit_price})`
          });
        }
      }
  
      for (let i = 0; i < steps.length; i++) {
        setCurrentStepIndex(i + 1);
        setActiveSteps(prev => [...prev.slice(0, i), steps[i]]);
        await new Promise(res => setTimeout(res, 600));
      }
  
      setHistory(prev => [...prev, steps]);
    }
  };
  
  const getSimulationInsights = () => {
    const summary = {
      autoRefunds: 0,
      blockedReturns: 0,
      routedToStore: 0,
      routedToDC: 0,
      routedToRepairs: 0,
      totalReturns: history.length,
      totalSteps: 0,
      ruleTriggers: 0,
    };
  
    history.forEach(session => {
      summary.totalSteps += session.length;
      session.forEach(step => {
        if (step.label === "Rule Triggered") {
          summary.ruleTriggers++;
          if (step.detail.includes("instant refund")) summary.autoRefunds++;
          if (step.detail.includes("Return not allowed")) summary.blockedReturns++;
          if (step.detail.includes("store with low inventory")) summary.routedToStore++;
          if (step.detail.includes("routing to DC") || step.detail.includes("item routed to DC")) summary.routedToDC++;
          if (step.detail.includes("repairs DC")) summary.routedToRepairs++;
        }
      });
    });
  
    return summary;
  };
  
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gray-100 p-6 font-sans">

<HeroHeader />
      {/* Returns Flow Overview Section */}
      <div className="flex items-center gap-3 mb-6 mt-12">
  <div className="h-10 w-2 bg-blue-600 rounded"></div>
  <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
    Returns Flow
  </h2>
</div>      <div className="w-full mb-12">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-[1600px] px-6 gap-6">
            {[
  { icon: "🛒", title: "Order Placed", desc: "Customer completes purchase" },
  {
    icon: "↩️",
    title: "Return Initiated",
    desc: "Return request submitted",
    link: "https://doddle.returns-portal-client-v2.apac-preprod.doddle.tech/HM"
  },
  {
    icon: "📦",
    title: "Drop-Off / Collection",
    desc: "Customer hands off return",
    link: "https://stage-assets-574265709368.s3.eu-west-1.amazonaws.com/in-store-app/index.html"
  },
  { icon: "🚚", title: "Transportation", desc: "Carrier delivers item" },
  {
    icon: "🔍",
    title: "Return Processed",
    desc: "Item is inspected & logged",
    link: "https://rps.eks.apac-preprod.doddle.tech/?hmDemo=true"
  },
  {
    icon: "⚖️",
    title: "Disposition",
    desc: "Restock, refurbish, or dispose",
    link: "https://rps.eks.apac-preprod.doddle.tech/?hmDemo=true"
  },
].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="flex-1 min-w-[0] max-w-[220px] aspect-square bg-white rounded-xl shadow flex flex-col justify-center items-center text-center p-4">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <p className="text-base font-semibold">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.desc}</p>
{step.link && (
  <a
    href={step.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-block text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
  >
    Go to App
  </a>
)}
    </div>
                {i < arr.length - 1 && (
                  <div className="text-3xl text-gray-400 flex-shrink-0">➡️</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

       {/* Configuration Section */}
       <div className="flex items-center gap-3 mb-6 mt-12">
  <div className="h-10 w-2 bg-blue-600 rounded"></div>
  <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
    Configuration
  </h2>
</div>      <div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
         {
          key: "orders-box",
          title: "🧾 Orders",
          content: (
            <div>
              {sampleData.orders.map((order) => (
                <div key={order.order_id} className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
                  <p><strong>Order ID:</strong> {order.order_id}</p>
                  <p><strong>Order Date:</strong> {order.order_date}</p>
                  <p><strong>Customer:</strong> {order.customer_name}</p>
                  <p><strong>Email:</strong> {order.email_address}</p>
                  <p><strong>Address:</strong> {order.address}</p>
                  <p><strong>Is Loyalty:</strong> {order.is_loyalty ? "Yes" : "No"}</p>
                  <div className="ml-4 mt-2">
                    <p><strong>Item:</strong></p>
                    {order.items.map((item, idx) => (
                      <div key={idx} className="pl-4 border-l mt-2">
                        <p>SKU: {item.sku}</p>
                        <p>Name: {item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.unit_price}</p>
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="mt-2 rounded max-h-32"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        },
          {
            key: "skus-box",
            title: "📦 SKUs",
            content: (
              <div>
                {sampleData.skus.map((sku) => (
                  <div key={sku.sku} className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
                    <p><strong>{sku.product_name}</strong> (SKU: {sku.sku})</p>
                    <p>Category: {sku.category}</p>
                    <p>Brand: {sku.brand}</p>
                    <p>Price: ${sku.price}</p>
                  </div>
                ))}
              </div>
            )
          },
          {
            key: "stores-box",
            title: "🏬 Stores",
            content: (
              <div>
                {sampleData.stores.map((store) => (
                  <div key={store.store_id} className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
                    <p><strong>{store.store_name}</strong> - {store.location}</p>
                    <p>Capacity: {store.capacity}</p>
                    <p>Returns Enabled: {store.returns_enabled ? "Yes" : "No"}</p>
                  </div>
                ))}
              </div>
            )
          },
          {
            key: "warehouses-box",
            title: "🏢 Warehouses",
            content: (
              <div>
                {sampleData.warehouses.map((wh) => (
                  <div key={wh.warehouse_id} className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
                    <p><strong>{wh.warehouse_name}</strong> - {wh.location}</p>
                    <p>Capacity: {wh.capacity}</p>
                    <p>Returns Enabled: {wh.returns_enabled ? "Yes" : "No"}</p>
                  </div>
                ))}
              </div>
            )
          },
          {
            key: "carriers-box",
            title: "🚚 Carriers",
            content: (
              <div>
                {sampleData.carriers.map((carrier, i) => (
                  <div key={i} className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
                    <p><strong>{carrier.carrier_name}</strong></p>
                    <p>Services: {carrier.services.join(", ")}</p>
                    <p>Lead Time: {carrier.lead_time_days} days</p>
                  </div>
                ))}
              </div>
            )
          },
          {
            key: "inventory-box",
            title: "📊 Inventory",
            content: (
              <div>
                {sampleData.inventory.map((inv, i) => (
                  <div key={i} className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
                    <p><strong>SKU:</strong> {inv.sku}</p>
                    <p>Location ID: {inv.location_id}</p>
                    <p>Quantity: {inv.quantity}</p>
                  </div>
                ))}
              </div>
            )
          },
          {
            key: "rules-box",
            title: "⚙️ Rules",
            content: (
              <TabView
                tabs={[
                  {
                    label: "View List",
                    content: (
                      <ul className="list-disc list-inside text-gray-700">
                        {sampleData.rules.map((rule, i) => (
                          <li key={i}>
                            <strong>{rule.name}:</strong> {rule.action.message}
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    label: "View JSON",
                    content: (
                      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                        {JSON.stringify(sampleData.rules, null, 2)}
                      </pre>
                    ),
                  }
                ]}
              />
            )
          },
          {
            key: "workflows-box",
            title: "🔄 Workflows",
            content: (
              <TabView
                tabs={[
                  {
                    label: "View List",
                    content: (
                      <div>
                        {sampleData.workflows.map((workflow, i) => (
                          <div key={i} className="mb-4">
                            <p className="font-semibold">{workflow.name}</p>
                            <ul className="list-disc list-inside ml-2">
                              {workflow.ruleKeys.map((ruleKey, idx) => (
                                <li key={idx} className="text-sm">{ruleKey}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                  {
                    label: "View JSON",
                    content: (
                      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                        {JSON.stringify(sampleData.workflows, null, 2)}
                      </pre>
                    ),
                  }
                ]}
              />
            )
          }
        ].map(({ key, title, content }) => (
          <ConfigBox key={key} title={title} content={content} />
        ))}
      </div>

      {/* Simulator Section */}
      <div className="flex items-center gap-3 mb-6 mt-12">
  <div className="h-10 w-2 bg-blue-600 rounded"></div>
  <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
    Simulator
  </h2>
</div>      <div className="w-full max-w-[1600px] mx-auto px-6 mb-8">
        <label className="block font-medium mb-2">Select Order(s):</label>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="bg-white p-3 w-full rounded-xl shadow border text-left"
          >
            {selectedOrders.length > 0
              ? `${selectedOrders.length} order(s) selected`
              : "Select Orders"}
          </button>
          {dropdownOpen && (
            <div className="absolute z-10 bg-white mt-2 w-full max-h-64 overflow-y-auto shadow-lg rounded-xl border">
              {sampleData.orders.map((order) => (
                <label
                  key={order.order_id}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.order_id)}
                    onChange={() => handleOrderCheckboxChange(order.order_id)}
                  />
                  <span>{order.order_id}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  <div className="bg-white p-6 rounded-xl shadow h-fit">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">🚀 Active Simulation</h2>
      <button
        onClick={runSimulation}
        disabled={running || selectedOrders.length === 0}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {running ? "Running..." : "Simulate Return"}
      </button>
    </div>
    <div className="space-y-4">
      {activeSteps.map((step, idx) => (
        <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
          <p className="text-lg">{step.icon} <strong>{step.label}</strong></p>
          <p className="text-gray-700 text-sm">{step.detail}</p>
        </div>
      ))}
      {running && (
        <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all"
            style={{ width: `${(currentStepIndex / 6) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  </div>

  <div className="bg-white p-6 rounded-xl shadow h-fit">
    <h2 className="text-xl font-bold mb-4">📜 Workflow History</h2>
    {history.length === 0 && <p className="text-gray-500">No simulations yet.</p>}
    {history.length > 0 && (
      <button
        onClick={() => setHistory([])}
        className="mb-3 text-sm text-red-600 hover:underline"
      >
        Clear Workflow History
      </button>
    )}
    {history.map((session, i) => (
      <div key={i} className="mb-4 border-t pt-2">
        <p className="text-md font-semibold text-blue-800 mb-1">Return #{i + 1}</p>
        {session.map((step, j) => (
          <div key={j} className="text-sm text-gray-700">
            {step.icon} <strong>{step.label}:</strong> {step.detail}
          </div>
        ))}
      </div>
    ))}
  </div>
</div>

    {/* Value & Governance Section */}
    <div className="flex items-center gap-3 mb-6 mt-12">
  <div className="h-10 w-2 bg-blue-600 rounded"></div>
  <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
    Value
  </h2>
</div>
<div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-2">📈 Business Value</h3>
      {(() => {
        const s = getSimulationInsights();
        return (
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>{s.totalReturns} returns simulated</li>
            <li>{s.autoRefunds} auto-refunded for loyalty customers</li>
            <li>{s.routedToStore} routed to stores with low inventory</li>
            <li>{s.routedToRepairs} sent to repairs DCs</li>
            <li>{s.blockedReturns} returns blocked due to policy</li>
            <li>{s.ruleTriggers} total rule triggers across all returns</li>
          </ul>
        );
      })()}
    </div>
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-2">🛡️ Governance</h3>
      {(() => {
        const s = getSimulationInsights();
        return (
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>{s.ruleTriggers} rules enforced consistently</li>
            <li>Governance ensured routing to stores, DCs, or repairs based on 4 rule types</li>
            <li>Blocked {s.blockedReturns} ineligible returns to avoid unnecessary costs</li>
          </ul>
        );
      })()}
    </div>
</div>
    </div>
  );
}