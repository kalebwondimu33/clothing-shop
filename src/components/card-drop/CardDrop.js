import React from "react";
import Custombutton from "../custom-button/Custombutton";
import { connect } from "react-redux";
import "./card-drop.scss";
import CartItem from "../cart-item/CartItem";
const CardDrop = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CardDrop);
