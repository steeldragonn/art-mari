import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext.js";
import "./NavBar.css";

function NavBar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar-wrapper">
      <Link to="/" className="img-wrapper-link--">
        <img src="/blacklog (1).png" alt="logo" className="logo" />
      </Link>
      <ul className="listPARENT">
        <li>
          <Link to="/collections">01. works</Link>
        </li>
        <li>
          <Link to="/events">02. workshops</Link>
        </li>

        <li>
          <Link to="/orderlist">
            {" "}
            03. cart <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">04. contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
