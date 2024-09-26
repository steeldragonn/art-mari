import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import "./OrderList.css";

function OrderList() {
  const { getCart, removeFromCart } = useCart();
  const cartItems = getCart();

  return (
    <div className="order-list">
      <h1>YOUR CART</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="order-item">
            <div className="order-item-content">
              {/* Link to navigate to the WorksDetail page */}
              <Link to={`/works/${item.id}`}>
                <img
                  className="order-image"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </Link>

              <div className="order-info">
                <h2>
                  <Link to={`/works/${item.id}`}>{item.name}</Link>
                </h2>
                <p>
                  <strong>Size:</strong> {item.size}
                </p>
                <p>
                  <strong>Year:</strong> {item.year}
                </p>
                <p>
                  <strong>Material:</strong> {item.material}
                </p>
                <p>
                  <strong>Description:</strong> {item.description}
                </p>
                <p>
                  <strong>Price:</strong> {item.price}
                </p>
                <button onClick={() => removeFromCart(index)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderList;
