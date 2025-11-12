import { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(item) {
    const newCartItems = structuredClone(cartItems);
    newCartItems.push(item);
    setCartItems(newCartItems);
  }

  function removeItem(id) {
    setCartItems(cartItems.filter(item => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  function getTotalPrice() {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  function countItemsInCart() {
    let totalItems = 0;
    cartItems.forEach(item => (totalItems += item.quantity));
    return totalItems;
  }

  return (
    <CartContext.Provider
      value={{ cart: cartItems, addItem, removeItem, clearCart, countItemsInCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}