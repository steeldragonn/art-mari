import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext.js";
import "./NavBar.css";

function NavBar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar-wrapper">
      <Link to="/">
        <img src="/лого.jpg" alt="logo" className="logo" />
      </Link>

      <ul className="listPARENT">
        <li>
          <Link to="/collections">01. COLLECTIONS</Link>
        </li>
        <li>
          <Link to="/events">02. EVENTS</Link>
        </li>

        <li>
          <Link to="/orderlist">
            {" "}
            03. CART <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">04. CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
