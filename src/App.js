import React, { useState } from "react";
import { orders, skus, stores, warehouses, inventory, carriers, schemas } from './data';
import Modal from './components/Modal';
import TabView from './components/TabView';
import HeroHeader from './components/HeroHeader';
import CostSavingsGraph from './components/CostSavingsGraph';
import CostSavingsChart from './components/CostSavingsChart';
import { defaultRules } from './rules/defaultRules';
import ConfigBox from './configBox';
import { actions } from './components/actions';
import { runSimulation } from './engine/simulationEngine';
import RuleForm from './components/ruleForm';
import ReturnSummary from './components/returnSummary';
import RulePriority from './components/rulePriority';
import { useEffect } from "react";
import { useLayoutEffect } from "react";

const sampleData = {
  orders,
  skus,
  stores,
  warehouses,
  carriers,
  inventory,

};

export default function App() {
  const [expandedSections, setExpandedSections] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [activeSteps, setActiveSteps] = useState([]);
  const [history, setHistory] = useState([]);
  const [running, setRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showJSONRule, setShowJSONRule] = useState(null);
  const [editRule, setEditRule] = useState(null);
  const [returns, setReturns] = useState([]);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedReturn, setSelectedReturn] = useState(null);
  const [rules, setRules] = useState(() => {
    const stored = localStorage.getItem("rules");
    return stored ? JSON.parse(stored) : defaultRules;
  });
  const [showReturnsList, setShowReturnsList] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  useLayoutEffect(() => {
    // Check if user is already at or near the bottom (within 100px)
    const threshold = 100;
    const { innerHeight, pageYOffset } = window;
    const scrollBottom = document.body.scrollHeight - (innerHeight + pageYOffset);
    if (scrollBottom < threshold) {
      // scroll to the very bottom without animation (or you can use smooth)
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [returns, history]);

  const clearAllData = () => {
    // Resets simulator, governance, and value data
    setSelectedOrders([]);
    setActiveSteps([]);
    setHistory([]);
    setReturns([]);
    setCurrentStepIndex(0);
    setRunning(false);
  };

  const handleSelectAllOrders = () => {
    if (selectedOrders.length === sampleData.orders.length) {
      // If all orders are already selected, clear selection
      setSelectedOrders([]);
    } else {
      // Otherwise, select all orders
      setSelectedOrders(sampleData.orders.map(order => order.order_id));
    }
  };

  useEffect(() => {
    localStorage.setItem("rules", JSON.stringify(rules));
  }, [rules]);

  const handleOrderCheckboxChange = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]
    );
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
  
  const totalExpectedSteps = selectedOrders.length ? selectedOrders.length * 6 : 1; // Avoid dividing by zero.
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
            <div className="space-y-3">
              {rules.map((rule, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                  <span className="font-semibold">{rule.name}</span>
                  <div className="space-x-3">
                    <button
                      onClick={() => setEditRule(rule)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setShowJSONRule(rule)}
                      className="text-green-600 text-sm hover:underline"
                    >
                      View JSON
                    </button>
                    <button
                      onClick={() => setRules(rules.filter(r => r.key !== rule.key))}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {rules.length > 0 && (
                <button
                  onClick={() => setRules(defaultRules)}
                  className="text-sm text-red-600 hover:underline mt-2"
                >
                  Reset to Default Rules
                </button>
              )}
            </div>
          )
        },
        {
          label: "Add Rule",
          content: (
            <RuleForm
              onAdd={(newRule) => {
                setRules([...rules, newRule]);
                setActiveTab(0); 
              }}
              schemas={schemas}
              rules={rules}
            />
          )
        },
        {
          label: "Rule Priority",
          content: <RulePriority rules={rules} setRules={setRules} />
        }
      ]}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  )
},
          {
            key: "financial-box",
            title: "💰 Cost Model",
            content: (
              <div className="text-sm text-gray-700">
                <p>
                  This section will allow users to configure key financial inputs such as cost per return,
                  refund values, and processing fees. These values will be used to calculate business value
                  and return savings in the simulator insights.
                </p>
                <p className="mt-2 italic text-gray-500">Coming soon: Add financial configuration to power ROI calculations.</p>
              </div>
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
      {/* "Select All" button */}
      <button
        onClick={handleSelectAllOrders}
        className="w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200"
      >
        Select All
      </button>
      {/* Orders list */}
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
  onClick={() =>
    runSimulation(
      selectedOrders,
      rules,
      sampleData,
      setRunning,
      setActiveSteps,
      setCurrentStepIndex,
      setReturns,
      setHistory
    )
  }
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
            style={{ width: `${(currentStepIndex / (selectedOrders.length * 6)) * 100}%` }}          ></div>
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

{/* Governance Section */}
<div className="flex items-center gap-3 mb-6 mt-12">
  <div className="h-10 w-2 bg-blue-600 rounded"></div>
  <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
    Governance
  </h2>
</div>

<div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left: List of Returns */}
<div className="bg-white rounded-xl shadow p-6">
  <h3 className="text-xl font-semibold mb-3">📦 Returns Created</h3>
  <button
    onClick={() => setShowReturnsList(prev => !prev)}
    className="bg-blue-600 text-white px-3 py-1 rounded mb-3"
  >
    {showReturnsList ? "Hide Returns Created" : "Show Returns Created"}
  </button>
  {showReturnsList && (
    returns.length === 0 ? (
      <p className="text-gray-500">No returns have been created yet.</p>
    ) : (
      <ul className="space-y-3">
        {returns.map((ret, i) => (
          <li
            key={i}
            onClick={() => {
              setSelectedReturn(ret);
              setShowReturnModal(true);
            }}
            className={`cursor-pointer p-3 rounded border ${selectedReturn?.orderId === ret.orderId ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100"}`}
          >
            <p className="font-semibold text-sm">Order #{ret.orderId} - {ret.customer}</p>
            <p className="text-sm text-gray-600">
              {ret.blocked
                ? "❌ Blocked"
                : ret.pendingApproval
                ? "⏳ Pending Approval"
                : "✅ Completed"}
            </p>
            <p className="text-xs text-gray-500">
              {ret.steps.length} steps · {ret.rulesTriggered?.length || 0} rules applied
            </p>
          </li>
        ))}
      </ul>
    )
  )}
</div>

 {/* Right: Aggregated Governance Summary */}
<div className="bg-white rounded-xl shadow p-6">
<h3 className="text-xl font-semibold mb-2">
  <span role="img" aria-label="shield" className="mr-2">🛡️</span>
  Performance Summary
</h3>  
  {/* Static Governance ensured text */}
  <div className="mb-4">
    <p className="font-semibold">Governance Ensured:</p>
    <ul className="list-disc list-inside text-gray-700 text-sm">
      <li>Preferred routing to stores, DCs, or repairs centres</li>
      <li>Returns of high value require manual approval</li>
      <li>Loyalty customers are refunded instantly</li>
    </ul>
  </div>
  
  {/* Dynamic list of Triggered Rule Types as bullet points */}
  <div className="mb-4">
    <p className="font-semibold">Triggered Rule Types:</p>
    <ul className="list-disc list-inside text-gray-700 text-sm">
      {(() => {
          // Get an array of all triggered rule names from all returns.
          const triggeredRulesAll = returns.flatMap(ret => ret.rulesTriggered || []);
          // Build a frequency object: key = rule name, value = count
          const ruleFrequency = triggeredRulesAll.reduce((acc, ruleName) => {
            acc[ruleName] = (acc[ruleName] || 0) + 1;
            return acc;
          }, {});
          // Map the frequency object to an array of <li> items:
          const ruleTypes = Object.entries(ruleFrequency).map(
            ([rule, count]) => <li key={rule}>{rule} ({count})</li>
          );
          return ruleTypes.length > 0 ? ruleTypes : <li>None</li>;
      })()}
    </ul>
  </div>
  
  {/* Aggregated Summary */}
  <div>
    <p className="font-semibold">Summary:</p>
    <ul className="list-disc list-inside text-gray-700 text-sm">
      <li>Total Returns: {returns.length}</li>
      <li>
        Total Steps: {returns.reduce((acc, ret) => acc + (ret.steps?.length || 0), 0)}
      </li>
      <li>
        Total Rules Triggered: {returns.reduce((acc, ret) => acc + (ret.rulesTriggered?.length || 0), 0)}
      </li>
    </ul>
  </div>
</div>
</div>
{showReturnModal && selectedReturn && (
  <Modal
    title={`Return Details - Order #${selectedReturn.orderId}`}
    content={<ReturnSummary returnData={selectedReturn} />}
    onClose={() => setShowReturnModal(false)}
  />
)}

{/* Value Section */}
<div className="flex items-center gap-3 mb-6 mt-12">
  <div className="h-10 w-2 bg-blue-600 rounded"></div>
  <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">Value</h2>
</div>

<div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left Column: Progress Bar and Graph */}
  <div className="bg-white rounded-xl shadow p-6">
    <div>
      <p className="text-gray-700 mb-2">
        {returns.length === 0 ? "Run the simulator to estimate cost savings.." : running ? "Returns are being created..." : "Returns complete"}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{
            width: running 
              ? `${(currentStepIndex / totalExpectedSteps) * 100}%`
              : returns.length > 0
              ? "100%"
              : "0%"
          }}
        ></div>
      </div>
    </div>
    <div className="flex items-center mb-2">
      <span role="img" aria-label="cost savings" className="mr-2">💰</span>
      <h3 className="text-xl font-semibold">Cost Savings</h3>
    </div>
    <CostSavingsChart returns={returns} />
  </div>

  {/* Right Column: Aggregated Business Value Summary */}
<div className="bg-white rounded-xl shadow p-6">
  <div className="flex items-center mb-2">
    <span role="img" aria-label="chart" className="mr-2">📊</span>
    <h3 className="text-xl font-semibold">Aggregated Business Value</h3>
  </div>
  {(() => {
    const totalReturns = returns.length;
    const totalSteps = returns.reduce((acc, ret) => acc + (ret.steps?.length || 0), 0);
    const totalRulesTriggered = returns.reduce((acc, ret) => acc + (ret.rulesTriggered?.length || 0), 0);
    const totalValue = returns.reduce((acc, ret) => acc + (ret.value || 0), 0);
    const totalCostSavings = returns.reduce((acc, ret) => {
      if (ret.rulesTriggered && ret.rulesTriggered.includes("Block if Order Older Than 30 Days")) {
        return acc + ret.value;
      }
      return acc;
    }, 0);
    
    const roundedTotalValue = Math.round(totalValue);
    const roundedTotalCostSavings = Math.round(totalCostSavings);
    
    return (
      <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
        <li><span role="img" aria-label="returns" className="mr-2">🔄</span>Total Returns: {totalReturns}</li>
        <li><span role="img" aria-label="value" className="mr-2">💵</span>Total Value: $ {roundedTotalValue}</li>
        <li><span role="img" aria-label="cost savings" className="mr-2">💰</span>Total Cost Savings: $ {roundedTotalCostSavings}</li>
      </ul>
    );
  })()}
</div>
  

  
{showJSONRule && (
  <Modal
    title={`JSON: ${showJSONRule.name}`}
    content={
      <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
        {JSON.stringify(showJSONRule, null, 2)}
      </pre>
    }
    onClose={() => setShowJSONRule(null)}
  />
)}
{editRule && (
  <Modal
    title={`Edit Rule: ${editRule.name}`}
    content={(
      <div className="space-y-3">
        <div>
          <label className="text-sm font-semibold block">Rule Name</label>
          <input
            className="w-full p-2 border rounded"
            value={editRule.name}
            onChange={(e) => setEditRule({ ...editRule, name: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-semibold block">Entity</label>
          <select
            className="w-full p-2 border rounded"
            value={editRule.condition.entity}
            onChange={(e) =>
              setEditRule({
                ...editRule,
                condition: { ...editRule.condition, entity: e.target.value },
              })
            }
          >
            {Object.keys(schemas).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold block">Field</label>
          <select
            className="w-full p-2 border rounded"
            value={editRule.condition.field}
            onChange={(e) =>
              setEditRule({
                ...editRule,
                condition: { ...editRule.condition, field: e.target.value },
              })
            }
          >
            <option value="">Select field</option>
            {(schemas[editRule.condition.entity] || []).map((f, i) => (
              <option key={i} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold block">Operator</label>
          <select
            className="w-full p-2 border rounded"
            value={editRule.condition.operator}
            onChange={(e) =>
              setEditRule({
                ...editRule,
                condition: { ...editRule.condition, operator: e.target.value },
              })
            }
          >
            <option value="">Select operator</option>
            <option value="equals">equals</option>
            <option value="less_than">less_than</option>
            <option value="greater_than">greater_than</option>
            <option value="older_than_days">older_than_days</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold block">Value</label>
          <input
            className="w-full p-2 border rounded"
            value={editRule.condition.value}
            onChange={(e) =>
              setEditRule({
                ...editRule,
                condition: {
                  ...editRule.condition,
                  value: isNaN(e.target.value) ? e.target.value : Number(e.target.value),
                },
              })
            }
          />
        </div>
        <div>
          <label className="text-sm font-semibold block">Phase</label>
          <select
            className="w-full p-2 border rounded"
            value={editRule.phase || "initiation"}
            onChange={(e) => setEditRule({ ...editRule, phase: e.target.value })}
          >
            <option value="initiation">Initiation</option>
            <option value="post_dropoff">Post-Dropoff</option>
            <option value="processing">Processing</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold block">Action Type</label>
          <select
            className="w-full p-2 border rounded"
            value={editRule.action.type}
            onChange={(e) =>
              setEditRule({
                ...editRule,
                action: {
                  ...editRule.action,
                  type: e.target.value,
                  message: actions[e.target.value]?.description || "",
                  icon: actions[e.target.value]?.icon || "🔧",
                },
              })
            }
          >
            <option value="">Select action</option>
            {Object.entries(actions).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold block">Message</label>
          <input
            className="w-full p-2 border rounded"
            value={editRule.action.message}
            onChange={(e) =>
              setEditRule({
                ...editRule,
                action: { ...editRule.action, message: e.target.value },
              })
            }
          />
        </div>
        <button
  onClick={async () => {
    setSaving(true);
    await new Promise(res => setTimeout(res, 600)); // Simulate async saving operation

    setRules(prev => prev.map(r => (r.key === editRule.key ? editRule : r)));
    setEditRule(null);
    setSaving(false);
  }}
  disabled={saving}
  className={`flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded ${
    saving ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
  }`}
>
  {saving ? (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  ) : (
    "Save"
  )}
</button>
      </div>
    )}
    onClose={() => setEditRule(null)}
  />
)}

{/* Clear All Data Button placed at bottom left */}
<div className="w-full max-w-[1600px] mx-auto px-6 mt-8 flex justify-start">
  <button
    onClick={clearAllData}
    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
  >
    Clear All Simulation Data
  </button>
</div>

    </div>
    </div>
  );
}