import React from "react";
import StripeCheckout from "react-stripe-checkout";
import crown from "../../assets/crown.svg";
const Strip = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51SW8MfPBcEXyiEsGeiLwxJKS0hbcxjjR42TjstKbzcAN4t2wLlMRLeTXDpThIT5lMo2Vi5oDWa3kEzy8xaZKzSmx00P8IRorEj";
  const onToken = (token) => {
    console.log(token);
    alert("payment sucessfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="KALEB Clothing Ltd"
      billingAddress
      shippingAddress
      image={crown}
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default Strip;
