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
      Cookies.set("cart", JSON.stringify(cart), {
        expires: 30,
        sameSite: "None",
        secure: true,
      });
    } else {
      Cookies.remove("cart"); // remove cookini if the cart is empty
    }
  }, [cart]);

  const getCart = () => cart;
  const getCartCount = () => cart.length;

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((i) => i._id === item._id);
      if (existingItemIndex !== -1) {
        // if the item already exists in the cart - leave quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      // if it's new item then - add  1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.reduce((acc, item) => {
        if (item._id === itemId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      return updatedCart;
    });
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
