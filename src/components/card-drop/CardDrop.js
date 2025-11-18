import React from "react";
import Custombutton from "../custom-button/Custombutton";
import "./card-drop.scss";
const CardDrop = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
  );
};

export default CardDrop;
