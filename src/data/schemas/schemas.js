import orders from '../orders';
import skus from '../skus';
import stores from '../stores';
import warehouses from '../warehouses';
import carriers from '../carriers';
import inventory from '../inventory';

export const schemas = {
  order: [
    ...new Set([
      ...Object.keys(orders[0] || {}),
      ...Object.keys(orders[0]?.items?.[0] || {}) // Flatten item fields like unit_price
    ])
  ],
  sku: Object.keys(skus[0] || {}),
  store: Object.keys(stores[0] || {}),
  warehouse: Object.keys(warehouses[0] || {}),
  carrier: Object.keys(carriers[0] || {}),
  inventory: Object.keys(inventory[0] || {}),
  returns: [
    "order_id",
    "customer_name",
    "item_name",
    "reason",
    "steps",
    "refunded",
    "value",
    "timestamp",
    "applied_rules",  // custom field
    "status",         // e.g., "Pending", "Refunded", "Blocked"
  ]
};