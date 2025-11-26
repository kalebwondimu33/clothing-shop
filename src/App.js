import "./App.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/Header";
import SigninSignup from "./pages/sign-in-and-sign-up/SigninSignup";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userAction";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelector";
import { connect } from "react-redux";
import Checkout from "./pages/checkout/Checkout";

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromUserSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          // Clean up previous snapshot listener if it exists
          if (this.unsubscribeFromUserSnapshot) {
            this.unsubscribeFromUserSnapshot();
          }

          this.unsubscribeFromUserSnapshot = onSnapshot(userRef, (snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        }
        return;
      }

      setCurrentUser(null);

      if (this.unsubscribeFromUserSnapshot) {
        this.unsubscribeFromUserSnapshot();
        this.unsubscribeFromUserSnapshot = null;
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }

    if (this.unsubscribeFromUserSnapshot) {
      this.unsubscribeFromUserSnapshot();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <SigninSignup />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
