import React, { useEffect } from 'react';
import './productDetails.css';
import Rating from '../../components/rating/Rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../actions/productActions';
import Spinner from '../../components/spinner/Spinner';

const ProductDetails = ({ match: { params } }) => {
  const productDetails = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const { isLoading, errorMessage, product } = productDetails;

  useEffect(() => {
    dispatch(fetchProductDetails(params.category, params.id));
  }, [dispatch, params]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        <div className="product-detail">
          <Link to="/">
            <button className="detail-back-button">
              <i className="fas fa-arrow-left"></i> Go Back
            </button>
          </Link>
          <div className="detail-container">
            <div className="detail-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="detail-name">
              <h3>{product.name}</h3>
            </div>
            <div className="detail-desc">
              <p>{product.description}</p>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={'#f8e825'}
              />
            </div>
            <div className="detail-cart">
              <p>Price : ${product.price}</p>
              <p>Stock : {product.countInStock}</p>
              <button disabled={product.countInStock === 0}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
