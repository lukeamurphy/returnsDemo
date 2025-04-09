// src/data/schemas.js
import orders from './orders';
import stores from './stores';
import inventory from './inventory';
import warehouses from './warehouses';
import carriers from './carriers';

const extractFields = (obj) => {
  return Object.keys(obj || {}).filter(k => typeof obj[k] !== 'object' || Array.isArray(obj[k]));
};

export const schemas = {
  order: extractFields(orders[0]),
  store: extractFields(stores[0]),
  inventory: extractFields(inventory[0]),
  warehouse: extractFields(warehouses[0]),
  carrier: extractFields(carriers[0]),
};