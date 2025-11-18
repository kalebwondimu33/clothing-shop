import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import Signup from "../../components/signup/Signup";
import "./signin-signup.scss";
const SigninSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SigninSignup;
