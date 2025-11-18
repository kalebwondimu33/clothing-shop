import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./signin.scss";
import Forminput from "../FormInput/Forminput";
import Custombutton from "../custom-button/Custombutton";
import { auth, signInwithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Error signing in user", error);
      alert(error.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have already have an account </h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Forminput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <Forminput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Custombutton type="submit">signin</Custombutton>
            <Custombutton
              type="button"
              onClick={signInwithGoogle}
              isGoogleSignIn
            >
              sign in with google
            </Custombutton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
