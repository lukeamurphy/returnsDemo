export const defaultRules = [
    {
      name: "Block if Order Older Than 30 Days",
      key: "blockIfOrderOlderThan30Days",
      priority: 1,
      phase: "initiation",
      condition: { field: "order_date", operator: "older_than_days", value: 30 },
      action: {
        type: "block_return",
        message: "Return not allowed: Order is older than 30 days.",
        icon: "⛔"
      }
    },
    {
      name: "Auto Refund for Loyalty Customers",
      key: "loyaltyAutoRefund",
      priority: 2,
      phase: "initiation",
      condition: { field: "is_loyalty", operator: "equals", value: true },
      action: {
        type: "auto_refund",
        message: "Loyalty customer — instant refund issued",
        icon: "💸"
      }
    },
    {
      name: "Route to Repairs if Damaged",
      key: "routeIfDamaged",
      priority: 3,
      phase: "initiation",
      condition: { field: "testReason", operator: "equals", value: "damaged" },
      action: {
        type: "route_to_repairs",
        message: "Item routed to repairs DC",
        icon: "🛠️"
      }
    },
    {
      name: "Route Based on Store Inventory",
      key: "routeBasedOnStoreInventory",
      priority: 4,
      phase: "initiation",
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
  ];