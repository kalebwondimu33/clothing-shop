import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { collection, onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import Category from "../category/Category";
import WithSpinner from "../../components/With-spinner/WithSpinner";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shopAction";
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Category);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = collection(firestore, "collections");
    this.unsubscribeFromSnapshot = onSnapshot(collectionRef, (snapshot) => {
      const collectionMaps = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMaps);
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            index
            element={<CollectionsOverviewWithSpinner isLoading={loading} />}
          />
          <Route
            path=":categoryId"
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
