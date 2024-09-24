import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie"; // Corrected import for js-cookie

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from cookies when the component mounts
  useEffect(() => {
    const storedCart = Cookies.get("cart"); // Get the cart from cookies
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Parse and set the saved cart
    }
  }, []);

  // to save cart to cookies whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); //  expires in 7 days
    } else {
      Cookies.remove("cart"); // Remto remove the cookini if the cart is empty
    }
  }, [cart]);

  const getCart = () => cart;

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ getCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
