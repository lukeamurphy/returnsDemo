import React, { useState } from "react";
import logo from "./by-logo.png";
import orders from './data/orders';
import skus from './data/skus';
import stores from './data/stores';
import warehouses from './data/warehouses';
import inventory from './data/inventory';
import carriers from './data/carriers';

const ruleFunctions = {
  blockIfOrderOlderThan30Days: (order) => {
    const orderDate = new Date(order.order_date.split("-").reverse().join("-"));
    const today = new Date();
    const diffInDays = (today - orderDate) / (1000 * 3600 * 24);
    if (diffInDays > 30) {
      return {
        label: "Return Blocked",
        icon: "⛔",
        detail: `Return not allowed: Order placed ${Math.floor(diffInDays)} days ago. Returns Policy is <30 days.`
      };
    }
    return null;
  },

  loyaltyAutoRefund: (order) => {
    if (order.is_loyalty) {
      return {
        label: "Auto Refund",
        icon: "💸",
        detail: "Loyalty customer — instant refund issued on return initiation",
        internal: "autoRefund"
      };
    }
    return null;
  },

  routeBasedOnStoreInventory: (order) => {
    const sku = order.items[0].sku;
    const fallbackStore = sampleData.stores.find((store) => {
      const inv = sampleData.inventory.find(
        (inv) => inv.sku === sku && inv.location_type === "store" && inv.location_id === store.store_id
      );
      return inv && inv.quantity < 30;
    });

    if (fallbackStore) {
      return {
        label: "Route to Store",
        icon: "🏬",
        detail: `Item routed to nearby store: ${fallbackStore.store_name}`,
        routedStore: fallbackStore
      };
    }

    const warehouse = sampleData.warehouses[0];
    return {
      label: "Route to DC",
      icon: "🏢",
      detail: `No nearby store with low inventory. Routed to: ${warehouse.warehouse_name}`,
      routedStore: null
    };
  }
};

const sampleData = {
  orders,
  skus,
  stores,
  warehouses,
  carriers,
  inventory,
  rules: [
    "blockIfOrderOlderThan30Days",
    "routeBasedOnStoreInventory"
  ],
  workflows: [
    {
      name: "Strict Return Policy",
      ruleKeys: ["blockIfOrderOlderThan30Days"]
    },
    {
      name: "Routing Workflow",
      ruleKeys: ["routeBasedOnStoreInventory"]
    },
    {
      name: "Loyalty Auto Refund",
      ruleKeys: ["loyaltyAutoRefund"]
    },
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
    const carrier = sampleData.carriers[0];

    setRunning(true);
    setActiveSteps([]);
    setHistory([]);

    const simulationRuns = [];

    for (let orderId of selectedOrders) {
      const order = sampleData.orders.find(o => o.order_id === orderId);
      const item = order.items[0];
      let steps = [];

      steps.push({
        label: "Return Initiated",
        icon: "🧾",
        detail: `Order ID: ${order.order_id}\nCustomer: ${order.customer_name}\nItem: ${item.name}`
      });

      let blocked = false;
      let dropOffStore = null;
      let skipRefund = false;

      for (const wf of sampleData.workflows) {
        for (const ruleKey of wf.ruleKeys) {
          const ruleFn = ruleFunctions[ruleKey];
          if (ruleFn) {
            const result = ruleFn(order);
            if (result) {
              steps.push({
                label: "Rule Triggered",
                icon: result.icon,
                detail: result.detail
              });

              if (result.hasOwnProperty('routedStore')) {
                dropOffStore = result.routedStore;
              }

              if (result.label === "Return Blocked") {
                blocked = true;
                break;
              }

              if (result.internal === "autoRefund") {
                skipRefund = true;
              }
            }
          }
        }
        if (blocked) break;
      }

      if (!blocked) {
        if (dropOffStore) {
          steps.push({
            label: "Drop-Off at Store",
            icon: "📦",
            detail: `Store: ${dropOffStore.store_name}\nAddress: ${dropOffStore.location}`
          });
        } else {
          const warehouse = sampleData.warehouses[0];
          steps.push({
            label: "Ship to DC",
            icon: "🚚",
            detail: `No store match — item routed to ${warehouse.warehouse_name}`
          });
        }

        if (!skipRefund) {
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

      simulationRuns.push(steps);
    }

    setHistory(simulationRuns);
    setRunning(false);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gray-100 p-6 font-sans">
      <div className="w-full flex justify-center mb-6">
        <img src={logo} alt="Blue Yonder Logo" className="h-16" />
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Returns Simulation App</h1>

      {/* Returns Flow Overview Section */}
      <h2 className="text-4xl font-bold border-b-2 border-gray-300 pb-2 text-gray-800 mb-6">Returns Flow Overview</h2>
      <div className="w-full mb-12">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-[1600px] px-6 gap-6">
            {[
              { icon: "🛒", title: "Order Placed", desc: "Customer completes purchase" },
              { icon: "↩️", title: "Return Initiated", desc: "Return request submitted" },
              { icon: "📦", title: "Drop-Off / Collection", desc: "Customer hands off return" },
              { icon: "🚚", title: "Transportation", desc: "Carrier delivers item" },
              { icon: "🔍", title: "Return Processed", desc: "Item is inspected & logged" },
              { icon: "⚖️", title: "Disposition", desc: "Restock, refurbish, or dispose" },
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="flex-1 min-w-[0] max-w-[220px] aspect-square bg-white rounded-xl shadow flex flex-col justify-center items-center text-center p-4">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <p className="text-base font-semibold">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.desc}</p>
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
       <h2 className="text-4xl font-bold border-b-2 border-gray-300 pb-2 text-gray-800 mb-6">Configuration</h2>
      <div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            key: "orders-box",
            title: "🧾 Orders",
            content: (
              <div>
                {sampleData.orders.map((order) => (
                  <div key={order.order_id} className="mb-4 p-3 bg-gray-50 rounded shadow-sm">
                    <p><strong>Order ID:</strong> {order.order_id}</p>
                    <p><strong>Customer:</strong> {order.customer_name}</p>
                    <p><strong>Email:</strong> {order.email_address}</p>
                    <p><strong>Address:</strong> {order.address}</p>
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
              <ul className="list-disc list-inside text-gray-700">
                {sampleData.rules.map((rule, i) => <li key={i}>{rule}</li>)}
              </ul>
            )
          },
          {
            key: "workflows-box",
            title: "🔄 Workflows",
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
            )
          }
        ].map(({ key, title, content }) => (
          <div key={key} className="bg-white rounded-xl shadow">
            <button
              onClick={() => toggleSection(key)}
              className="w-full text-left text-xl font-semibold px-4 py-3 border-b rounded-t-xl bg-blue-50 hover:bg-blue-100"
            >
              {title}
            </button>
            {expandedSections[key] && (
              <div className="px-4 py-3">
                {content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Simulator Section */}
      <h2 className="text-4xl font-bold border-b-2 border-gray-300 pb-2 text-gray-800 mt-12 mb-6">Simulator</h2>
      <div className="w-full max-w-[1600px] mx-auto px-6 mb-8">
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
          {history.map((session, i) => (
            <div key={i} className="mb-4 border-t pt-2">
              {session.map((step, j) => (
                <div key={j} className="text-sm text-gray-700">
                  {step.icon} <strong>{step.label}:</strong> {step.detail}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
