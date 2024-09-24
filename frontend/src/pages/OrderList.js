import React from "react";
import { useCart } from "../CartContext";

function OrderList() {
  const { getCart } = useCart();
  const cartItems = getCart();

  return (
    <div className="order-list">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="work-detail">
            <img src={item.imageUrl} alt={item.name} />
            <h1>{item.name}</h1>
            <p>Size: {item.size}</p>
            <p>Year: {item.year}</p>
            <p>Material: {item.material}</p>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderList;
