import React from 'react';

const CartContext= React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeIteme: (id) => {} 
});

export default CartContext;