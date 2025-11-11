import React from "react";
import "./custumbutton.scss";

const Custombutton = ({ children, isGoogleSignIn, ...otherprops }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Custombutton;
