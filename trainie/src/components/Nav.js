import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Nav() {
  return (
    <nav className="nav-container">
      <p className="nav1">
        <Link to="/">home</Link>
      </p>
      <p className="nav2">
        <Link to="/about">about</Link>
      </p>
      <p className="nav3">
        <Link to="/services">services</Link>
      </p>
      <p className="nav4">
        <Link to="/gallery">gallery</Link>
      </p>
    </nav>
  );
}
export default Nav;
