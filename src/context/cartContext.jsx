import { createContext, useState } from 'react';

// ✅ por convención y para que React lo reconozca bien, el contexto va con mayúscula
export const CartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // * CRUD -> create read update delete
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
    // array.reduce()
  }

  // ✅ corrección: el Provider debe llamarse igual que el contexto (CartContext)
  return (
    <CartContext.Provider
      value={{ cart: cartItems, addItem, removeItem, clearCart, countItemsInCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}