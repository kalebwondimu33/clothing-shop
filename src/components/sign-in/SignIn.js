import React from "react";
import "./signin.scss";
import Forminput from "../FormInput/Forminput";
import Custombutton from "../custom-button/Custombutton";
import { signInwithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
            <Custombutton onClick={signInwithGoogle} isGoogleSignIn>
              sign in with google
            </Custombutton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
