import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about Me</Link>
        </li>
        <li>
          <Link to="/works">works</Link>
        </li>
        <li>
          <Link to="/orderlist">orders </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
