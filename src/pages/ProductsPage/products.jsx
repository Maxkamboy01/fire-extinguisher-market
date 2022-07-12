import React from "react";
import { Productsstyle, Board } from "./style";
import Item from "../../components/item/item";

function products() {

  return (
    <Productsstyle>
      <Board>
        <div className="cover"></div>
        <h3>Products</h3>
      </Board>
      <h3>Рекомендованные товары только для вас</h3>
      <section>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </section>
    </Productsstyle>
  );
}

export default products;
