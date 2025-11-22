import React from "react";
import "./category.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";

const Category = () => {
  const { categoryId } = useParams();
  const collection = useSelector(selectCollection(categoryId));
  const { title, items } = collection;
  console.log(collection);

  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
