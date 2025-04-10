// src/components/CostSavingsChart.js
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  LabelList 
} from 'recharts';

export default function CostSavingsChart({ returns, blockedRuleName = "Block if Order Older Than 30 Days" }) {
  // Calculate the total cost savings from returns where the blocked rule was triggered.
  const costSavings = returns.reduce((acc, ret) => {
    if (ret.rulesTriggered && ret.rulesTriggered.includes(blockedRuleName)) {
      return acc + ret.value;
    }
    return acc;
  }, 0);

  // Round the cost savings to the nearest whole number.
  const roundedCostSavings = Math.round(costSavings);

  // Prepare data for the chart.
  const data = [
    { name: "Blocked Returns", value: roundedCostSavings }
  ];

  // Compute domain maximum: 5 times the cost savings, rounded up to the nearest 100 (or default to 100 if 0)
  const domainMax = roundedCostSavings ? Math.ceil((roundedCostSavings * 5) / 100) * 100 : 100;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 30, right: 20, bottom: 50, left: 60 }}
      >
        <XAxis
          dataKey="name"
          stroke="#333"
          label={{ 
            value: "Cost Saving Bucket", 
            position: 'bottom', 
            offset: 20 
          }}
        />
        <YAxis 
          stroke="#333"
          domain={[0, domainMax]}
          tickFormatter={(value) => value}
          label={{ value: '$', angle: 0, position: 'insideLeft', offset: -5 }}
        />
        <Tooltip formatter={(value) => `$${value}`} />
        <Bar dataKey="value" fill="#82ca9d">
          <LabelList dataKey="value" position="top" formatter={(value) => `$${value}`} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}