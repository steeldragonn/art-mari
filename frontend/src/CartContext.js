import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const getCart = () => {
    return cart;
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};
