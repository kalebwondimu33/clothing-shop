import React from "react";
import "./checkout.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartselector";
import { selectCartTotal } from "../../redux/cart/cartselector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="product">Product</span>
        </div>
        <div className="header-block">
          <span className="description">Name</span>
        </div>
        <div className="header-block">
          <span className="Quantity">Quantity</span>
        </div>
        <div className="header-block">
          <span className="price">price</span>
        </div>
        <div className="header-block">
          <span className="remove">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span> TOTAL : ${total} </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
