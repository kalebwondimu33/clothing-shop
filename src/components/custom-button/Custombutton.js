import React from "react";
import "./custumbutton.scss";

const Custombutton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      }`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Custombutton;
