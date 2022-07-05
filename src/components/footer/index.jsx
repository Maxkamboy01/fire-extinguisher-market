import React from "react";
import { Link } from "react-router-dom";
import { MainFooterStyle } from "./style";
import Smart from "../../assets/images/smartphone.png";
import Telephone from "../../assets/images/telephone.png";
import Email from "../../assets/images/email.png";
import Compass from "../../assets/images/compass.png";

function Footer() {
  return (
    <MainFooterStyle>
      <section>
        <h4>Communication</h4>
        <ul>
          <li className="logofooter">UYUTservis</li>
          <li>Tashkent</li>
          <li>
            Чиланзар, кв-л 2, ул. АРНАСАЙ, д 26 (бывшая ул. Пионерская,
            ориентир-ресторан "Арнасай")
          </li>
          <li>График работы: понедельник - суббота,(воскресенье - выходной)</li>
        </ul>
      </section>
      <section>
        <h4>Our company</h4>
        <ul>
          <li>
            <img src={Compass} alt="" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <img src={Compass} alt="" />
            <Link to="/about">About us</Link>
          </li>
          <li>
            <img src={Compass} alt="" />
            <Link to="/">Products</Link>
          </li>
          {/* <li>
            <Link to="/">Contacts</Link>
          </li> */}
        </ul>
      </section>
      <section>
        <h4>
          <Link to="/contact">Contacts</Link>
        </h4>
        <ul>
          <li>
            <a href="tel:+998933897880">
              <img src={Smart} alt="" />
              +998 93 389 78 80
            </a>
          </li>
          <li>
            <a href="tel:+998998947880">
              <img src={Telephone} alt="" />
              +998 99 489 78 80
            </a>
          </li>
          <li>
            <a href="email">
              <img src={Email} alt="" />
              angrenuyutservis@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </MainFooterStyle>
  );
}

export default Footer;
