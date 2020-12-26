import React from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";
import "./productItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="card-desc">
        <div>
          <Link to={`/products/${product.category}/${product._id}`}>
            <h4>{product.name}</h4>
          </Link>
        </div>
        <div>
          <p className="price">${product.price}</p>
          <Rating
            value={product.rating}
            text={`(${product.numReviews})`}
            color={"#f8e825"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
