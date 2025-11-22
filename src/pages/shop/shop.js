import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Category from "../category/Category";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionOverview />} />
        <Route path=":categoryId" element={<Category />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
