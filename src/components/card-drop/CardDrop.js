import React from "react";
import Custombutton from "../custom-button/Custombutton";
import { connect } from "react-redux";
import "./card-drop.scss";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cartselector";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/CartAction";
const CardDrop = ({ cartItems, history, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <Custombutton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Custombutton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CardDrop);
