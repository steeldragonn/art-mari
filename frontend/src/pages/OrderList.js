import React from "react";
import { useCart } from "../CartContext";

function OrderList() {
  const { getCart, addToCart } = useCart(); // Use getCart and addToCart from CartContext
  const cartItems = getCart(); // Get the items currently in the cart

  // Render cart items
  return (
    <div className="order-list">
      {cartItems.map((item) => (
        <div key={item._id} className="work-detail">
          <img src={item.imageUrl} alt={item.name} />
          <h1>{item.name}</h1>
          <p>Size: {item.size}</p>
          <p>Year: {item.year}</p>
          <p>Material: {item.material}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default OrderList;
