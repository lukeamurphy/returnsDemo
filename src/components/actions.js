export const actions = {
  block_return: {
    label: "Block Return",
    icon: "⛔",
    description: "Stop the return from being processed further.",
    effect: "block"
  },
  auto_refund: {
    label: "Auto Refund",
    icon: "💸",
    description: "Issue a refund instantly for eligible customers.",
    effect: "refund"
  },
  route_to_dc: {
    label: "Route to DC",
    icon: "🏢",
    description: "Send the return to the distribution center.",
    effect: "routing"
  },
  route_to_store: {
    label: "Route to Store",
    icon: "🏬",
    description: "Reroute return to a store with low stock.",
    effect: "routing"
  },
  route_to_repairs: {
    label: "Route to Repairs",
    icon: "🛠️",
    description: "Send damaged items to the repair DC.",
    effect: "repairs"
  },
  require_manual_approval: {
    label: "Require Manual Approval",
    description: "Return flagged for manual review",
    icon: "📝"
  },
};