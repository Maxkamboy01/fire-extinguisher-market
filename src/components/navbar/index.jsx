import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyle } from "./style";

function Navbar() {
  return (
    <NavbarStyle className="container">
      <a href="/" className="logo">UYUTservis</a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/product">products</Link>
        </li>
        <li>
          <Link to="/contact">contacts</Link>
        </li>
        <li>
          <button>
            <a href="tel:+998933897880">998 (93) 389-78-80</a>
          </button>
        </li>
      </ul>
    </NavbarStyle>
  );
}

export default Navbar;
