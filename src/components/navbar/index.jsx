import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../../assets/images/menu-white.png";
import { BurgerMenu, NavbarStyle } from "./style";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbaropen: false,
    };

  }
  render(){
  const navbarhendler = () => {
    this.setState({
      navbaropen: !this.state.navbaropen,
    });
  };

  return (
    <NavbarStyle className="container">
      <a href="/" className="logo">
        Angrenuyutservis
      </a>

      <ul className="ul">
        <li>
          <Link to="/">Дом</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/product">Продукты</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
        <li>
          <button>
            <a href="tel:+998994897880">998 (99) 489-78-80</a>
          </button>
        </li>
      </ul>
      <BurgerMenu isOpen={this.state.navbaropen} className="burgermenu">
        {/* <FontAwesomeIcon icon="far fa-fire-extinguisher" /> */}
        <div onClick={navbarhendler} className="burgermenu-icon">
          <img src={Menu} alt="" />
        </div>
        <ul>
          Angrenuyutservis
          <li>
            <Link to="/">Дом</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/product">Продукты</Link>
          </li>
          <li>
            <Link to="/contact">Контакты</Link>
          </li>
        </ul>
      </BurgerMenu>
    </NavbarStyle>
  )}
}

export default Navbar;
