import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext.js";
import "./NavBar.css";

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

  const workTest = "/works/one-work-test.jpg";

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
          <Link to="/about">01. ABOUT ME</Link>
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
          <Link to="/events">02. EVENTS</Link>
        </li>
        <li>
          <Link to="/works">03. WORKS</Link>
        </li>
        <li>
          <Link to="/orderlist">
            {" "}
            04. CART <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">05.CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
