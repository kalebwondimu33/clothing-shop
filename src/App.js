import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/Header";
import SigninSignup from "./pages/sign-in-and-sign-up/SigninSignup";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SigninSignup />} />
        </Routes>
      </div>
    );
  }
}

export default App;
