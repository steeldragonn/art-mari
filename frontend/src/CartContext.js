import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = Cookies.get("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // parse and set the saved cart
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      // Update to include SameSite and Secure attributes
      Cookies.set("cart", JSON.stringify(cart), {
        expires: 30,
        sameSite: "None", // explicitly setting SameSite=None
        secure: true, // cookies must be sent over HTTPS
      });
      console.log("Cookie set:", Cookies.get("cart"));
    } else {
      Cookies.remove("cart"); // remove cookini if the cart is empty
    }
  }, [cart]);

  const getCart = () => cart;

  //  method to return the cart count
  const getCartCount = () => cart.length;

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <CartContext.Provider
      value={{ getCart, addToCart, getCartCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
