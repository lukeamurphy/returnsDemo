import React, { useState } from "react";
import { actions } from './actions';

const RuleForm = ({ onAdd, schemas, rules }) => {
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("order");
  const [field, setField] = useState("");
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");
  const [actionType, setActionType] = useState("");
  const [phase, setPhase] = useState("initiation");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const isFormValid = entity && field && operator && value !== "" && actionType && message;

  return (
    <div className="space-y-3 relative">
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow">
          ✅ Rule added!
        </div>
      )}

      <div>
        <label className="text-sm font-semibold block">Name</label>
        <input
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Require Manual Approval"
        />
      </div>

      <div>
        <label className="text-sm font-semibold block">Entity</label>
        <select className="w-full p-2 border rounded" value={entity} onChange={(e) => { setEntity(e.target.value); setField(""); }}>
          {Object.keys(schemas).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold block">Field</label>
        <select className="w-full p-2 border rounded" value={field} onChange={(e) => setField(e.target.value)}>
          <option value="">Select field</option>
          {(schemas[entity] || []).map((f, i) => (
            <option key={i} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold block">Operator</label>
        <select className="w-full p-2 border rounded" value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="">Select operator</option>
          <option value="equals">equals</option>
          <option value="less_than">less_than</option>
          <option value="greater_than">greater_than</option>
          <option value="older_than_days">older_than_days</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold block">Value</label>
        <input className="w-full p-2 border rounded" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>

      <div>
        <label className="text-sm font-semibold block">Action Type</label>
        <select
          className="w-full p-2 border rounded"
          value={actionType}
          onChange={(e) => {
            setActionType(e.target.value);
            if (actions[e.target.value]) {
              setMessage(actions[e.target.value].description);
            }
          }}
        >
          <option value="">Select action</option>
          {Object.entries(actions).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold block">Message</label>
        <input className="w-full p-2 border rounded" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>

      <div>
        <label className="text-sm font-semibold block">Phase</label>
        <select className="w-full p-2 border rounded" value={phase} onChange={(e) => setPhase(e.target.value)}>
          <option value="initiation">Initiation</option>
          <option value="post_dropoff">Post-Dropoff</option>
          <option value="processing">Processing</option>
        </select>
      </div>

      <button
        onClick={async () => {
          if (!isFormValid) return;

          setSaving(true);
          setSuccess(false);

          const newRule = {
            name: name || `Custom Rule (${entity}.${field})`,
            key: `custom_${Date.now()}`,
            condition: {
              entity,
              field,
              operator,
              value: isNaN(value) ? value : Number(value),
            },
            phase,
            priority: rules.length + 1, // Automatically set at bottom
            action: {
              type: actionType,
              message,
              icon: actions[actionType]?.icon || "🔧",
            },
          };

          await new Promise((res) => setTimeout(res, 600));

          onAdd(newRule);
          setSaving(false);
          setSuccess(true);
          setShowSuccess(true);

          setTimeout(() => setSuccess(false), 1500);
          setTimeout(() => setShowSuccess(false), 2500);

          setName("");
          setEntity("order");
          setField("");
          setOperator("");
          setValue("");
          setActionType("");
          setMessage("");
          setPhase("initiation");
        }}
        disabled={saving}
        className={`flex justify-center items-center bg-blue-600 text-white px-4 py-2 rounded ${
          saving ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
      >
        {saving ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        ) : success ? (
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          "Add Rule"
        )}
      </button>
    </div>
  );
};

export default RuleForm;