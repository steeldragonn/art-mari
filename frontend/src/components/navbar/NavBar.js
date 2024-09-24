import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext.js";
import "./NavBar.css";

import workTest from "../../public/works/one-work-test.jpg";

function NavBar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [showPictureOnHover, setShowPictureOnHover] = useState(null);

  const handleMouseEnterNavItem = () => {
    setShowPictureOnHover(true);
  };
  const handleMouseLeaveNavItem = () => {
    setShowPictureOnHover(false);
  };

  return (
    <nav className="navbar-wrapper">
      <Link to="/">
        <img src="/лого.jpg" alt="logo" className="logo" />
      </Link>

      <ul className="listPARENT">
        <li
          onMouseEnter={handleMouseEnterNavItem}
          onMouseLeave={handleMouseLeaveNavItem}
          style={{ position: "relative" }}
        >
          <Link to="/about">01. about Me</Link>
          <img
            src={workTest}
            alt="test-img"
            style={{
              height: showPictureOnHover ? "200px" : "0px",
              border: showPictureOnHover ? "1px solid #777777" : "none",
              position: "absolute",
              left: 0,
              top: 60,
            }}
            className="hover-image"
          />
        </li>
        <li>
          <Link to="/works">02. works</Link>
        </li>
        <li>
          <Link to="/orderlist">
            {" "}
            03. cart <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
