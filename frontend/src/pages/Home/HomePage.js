import React, { useEffect } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import { fetchProductList } from "../../actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { isLoading, errorMessage, products } = productList;

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <h3>{errorMessage}</h3>
      ) : (
        <>
          <h1 style={{ marginLeft: "10px" }}>Featured Products</h1>
          <div className="cards-container">
            {products.map((product) => {
              return <ProductItem product={product} key={product._id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
