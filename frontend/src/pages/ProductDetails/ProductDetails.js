import React from 'react';
import './productDetails.css';
import products from '../../products';
import Rating from '../../components/rating/Rating';
import { Link } from 'react-router-dom';

const ProductDetails = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link to="/">
        <button className="detail-back-button">
          <i class="fas fa-arrow-left"></i> Go Back
        </button>
      </Link>
      <div class="detail-container">
        <div class="detail-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div class="detail-name">
          <h3>{product.name}</h3>
        </div>
        <div class="detail-desc">
          <p>{product.description}</p>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={'#f8e825'}
          />
        </div>
        <div class="deatil-cart">
          <p>Price : ${product.price}</p>
          <p>Status : ${product.countInStock}</p>
          <button disabled={product.countInStock === 0}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
