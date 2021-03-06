import { Homepagestyle, Itemswrapper ,Aboutlist} from "./style";
import React from "react";
import Header from "../../components/header/header";
import Item from "../../components/item/item";
import { Link } from "react-router-dom";
import flame from "../../assets/images/flames.png";

function Homepage() {
  return (
    <Homepagestyle>
      <Header />
      <Aboutlist>
        <ul>
          Порошковые огнетушители
          <li>
            <img src={flame} alt="" />
            Огнетушители порошковые используются при тушении пожаров класса А, В
            (дерево, бумага, краски и ГСМ), С (Газообразные вещества) и
            электроустановок находящихся под напряжением до 1000B.
          </li>
          <li>
            <img src={flame} alt="" />
            Огнетушители бывают разных видов, и часто варьируются в зависимости
            от типа наполнителя. Порошковые огнетушители – это специальное
            устройство, в стальной корпус которого закачивается под давлением
            порошок.
          </li>
          <li>
            <img src={flame} alt="" />
            Открывание и закрывание аппарата происходит довольно – таки легко,
            благодаря специальному клапану, индикатору давления.
          </li>
          <li>
            <img src={flame} alt="" />
            Порошковые огнетушители снабжены манометром, который показывает
            давление в баллоне, тем самым сообщая пользователю об оставшейся
            работоспособности устройства.
          </li>
          <li>
            <img src={flame} alt="" />
            Эксплуатируются огнетушители при температуре от -40 до +50°С.
          </li>
          <li>
            <img src={flame} alt="" />
            Перезарядка один раз в 3 года.
          </li>
        </ul>
      </Aboutlist>
      <Itemswrapper>
        <h1>Популярные товары только у нас</h1>
        <section>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </section>

        <button className="moreproducts">
          <Link to="/product">more products</Link>
        </button>
      </Itemswrapper>
    </Homepagestyle>
  );
}

export default Homepage;
