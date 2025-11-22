import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/CollectionPreview";

import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import "./collectionoverview.scss";
const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...othercollectionprops }) => (
        <CollectionPreview key={id} {...othercollectionprops} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
