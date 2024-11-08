import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import "./OrderList.css";

function OrderList() {
  const { getCart, removeFromCart } = useCart();

  const cartItems = getCart();
  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item._id]) {
      acc[item._id].quantity += item.quantity;
    } else {
      acc[item._id] = { ...item };
    }
    return acc;
  }, {});

  const groupedItemsArray = Object.values(groupedItems);
  const totalPrice = groupedItemsArray.reduce(
    (sum, item) =>
      sum + (typeof item.price === "number" ? item.price * item.quantity : 0),
    0
  );

  return (
    <div className="order-list-container">
      <div className="order-items">
        {groupedItemsArray.map((item, index) => (
          <div key={item._id} className="order-item">
            <div className="item-box">
              {" "}
              <div className="item-info">
                <div className="item-circle">
                  <span className="item-number">{index + 1}</span>{" "}
                </div>
                <div className="quantity-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // to prevent link navigation
                      removeFromCart(item._id);
                    }}
                    className="remove-button"
                  >
                    -
                  </button>
                  <span className="quantity-number">{item.quantity} x</span>
                </div>
              </div>
              <Link to={`/work/${item._id}`}>
                <img
                  className="order-image"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h2>Your Cart</h2>
        <ul>
          {groupedItemsArray.map((item, index) => (
            <li key={item._id} className="order-list-item">
              <span className="item-circle-detail">{index + 1}</span>
              <span className="item-name">{item.name}</span>
              <div className="item-details">
                <p>Collection: {item.collection || "N/A"}</p>
                <p>Material: {item.material || "N/A"}</p>
                <p>Year: {item.year || "N/A"}</p>
                <p className="item-price">
                  $
                  {typeof item.price === "number"
                    ? item.price.toFixed(2)
                    : "N/A"}
                </p>
              </div>
              <hr className="separator" />{" "}
            </li>
          ))}
        </ul>
        <div className="total">
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
