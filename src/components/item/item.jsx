import React from "react";
import { Itemstyle } from "./style";
import itemimg from "../../assets/images/item.png";
import { Link } from "react-router-dom";

function item() {

  const contacts = (e)=>{
    console.log(e);
  }

  return (
    <Itemstyle>
      
      <img src={itemimg} alt="" />
      <h3 className="h3">Огнетушитель порошковый ОП-1</h3>
      <h4 className="h4">класс ABCЕ / 1 кг. с манометром</h4>
      <button onClick={contacts} className="contact">
        <Link to="/contact">связаться</Link>
        
      </button>
    </Itemstyle>
  );
}

export default item;
