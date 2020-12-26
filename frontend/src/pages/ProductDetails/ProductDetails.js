import React, { useState, useEffect } from "react";
import "./productDetails.css";
import Rating from "../../components/rating/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../actions/productActions";
import Spinner from "../../components/spinner/Spinner";

const ProductDetails = ({ history, match: { params } }) => {
  const productDetails = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();
  const { isLoading, errorMessage, product } = productDetails;
  const [productQty, setProductQty] = useState(1);

  useEffect(() => {
    dispatch(fetchProductDetails(params.id));
  }, [dispatch, params]);

  const addToCart = () => {
    history.push(`/cart/${params.id}?qty=${productQty}`);
  };

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
                color={"#f8e825"}
              />
            </div>
            <div className="detail-cart">
              <p>Price : ${product.price}</p>
              <p>Stock : {product.countInStock}</p>
              {product.countInStock !== 0 && (
                <>
                  <p>
                    Quantity:
                    <select
                      value={productQty}
                      style={{ marginLeft: "10px" }}
                      onChange={(e) => setProductQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                    <br />
                  </p>
                </>
              )}
              <button
                style={{ marginTop: "10px" }}
                disabled={product.countInStock === 0}
                onClick={addToCart}
              >
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
