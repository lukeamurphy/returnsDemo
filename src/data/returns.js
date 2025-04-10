const returns = []; // dynamic only — not prefilled

export const returnSchema = {
  id: 'string',                  // e.g. uuid or timestamp
  orderId: 'string',
  customer: 'string',
  item: {
    sku: 'string',
    name: 'string',
    quantity: 'number',
    unit_price: 'number',
  },
  reason: 'string',
  dropOffStore: {
    id: 'string',
    name: 'string',
  },
  destination: {
    type: 'repairs' | 'dc' | 'store' | 'none',
    name: 'string',
    location: 'string',
  },
  rulesTriggered: ['string'],
  refunded: 'boolean',
  value: 'number',
  carrier: 'string',
  timestamp: 'string',
  steps: [], // array of simulation steps
};

export default returns;