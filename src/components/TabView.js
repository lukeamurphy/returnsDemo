import React from "react";

export default function TabView({ tabs, activeTab, setActiveTab }) {
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
      <div>{tabs[activeTab]?.content}</div>
    </div>
  );
}