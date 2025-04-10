import React from 'react';

export default function ReturnSummary({ returnData }) {

  console.log("Return Summary Data:", returnData);
  if (!returnData) return <p className="text-gray-500">No return selected</p>;

  return (
    <div>
      <p className="font-semibold text-lg mb-2">Return Details</p>
      <p><strong>Order ID:</strong> {returnData.orderId}</p>
      <p><strong>Customer:</strong> {returnData.customer}</p>
      <p><strong>Status:</strong> {returnData.blocked ? "❌ Blocked" : returnData.pendingApproval ? "⏳ Pending Approval" : "✅ Completed"}</p>
      <p><strong>Rules Applied:</strong> {returnData.rulesTriggered?.length || 0} rules</p> {/* Add this line */}
      <p><strong>Steps:</strong></p>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {returnData.steps.map((step, idx) => (
          <li key={idx}>{step.icon} {step.label} - {step.detail}</li>
        ))}
      </ul>
    </div>
  );
}