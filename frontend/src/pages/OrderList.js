import React, { useState } from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import "./OrderList.css";

function OrderList({ lastViewedItem }) {
  const { getCart } = useCart();
  const cartItems = getCart();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const displayedItems = cartItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const hasNextPage = (currentPage + 1) * itemsPerPage < cartItems.length;

  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="order-list-container">
      <div className="left-side">
        {lastViewedItem ? (
          <div className="last-viewed-item">
            <img
              className="last-viewed-image"
              src={lastViewedItem.imageUrl}
              alt={lastViewedItem.name}
            />
            <div className="last-viewed-info">
              <h2>{lastViewedItem.name}</h2>
              <p>
                <strong>Size:</strong> {lastViewedItem.size}
              </p>
              <p>
                <strong>Year:</strong> {lastViewedItem.year}
              </p>
              <p>
                <strong>Material:</strong> {lastViewedItem.material}
              </p>
              <p>
                <strong>Description:</strong> {lastViewedItem.description}
              </p>
              <p>
                <strong>Price:</strong> {lastViewedItem.price}
              </p>
            </div>
          </div>
        ) : (
          <p>No last viewed item.</p>
        )}
      </div>

      <div className="right-side">
        <h1>YOUR CART</h1>
        <div className="cart-grid">
          {displayedItems.map((item, index) => (
            <div key={index} className="cart-item">
              <Link to={`/work/${item._id}`}>
                <img
                  className="cart-item-image"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </Link>
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="pagination-controls">
          {currentPage > 0 && (
            <button onClick={prevPage} className="pagination-button">
              ←
            </button>
          )}
          {hasNextPage && (
            <button onClick={nextPage} className="pagination-button">
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderList;
