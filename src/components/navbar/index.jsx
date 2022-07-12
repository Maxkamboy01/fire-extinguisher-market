import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyle } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

function Navbar() {
  module.exports = function (api) {
    return {
      plugins: ["macros"],
    };
  };
  module.exports = {
    "fontawesome-svg-core": {
      license: "free",
    },
  };

  return (
    <NavbarStyle className="container">
      <a href="/" className="logo">
        UYUTservis
      </a>

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
      <div className="burgermenu">
        {/* <FontAwesomeIcon icon="far fa-fire-extinguisher" /> */}
        <div className="burgermenu-icon">

        </div>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
