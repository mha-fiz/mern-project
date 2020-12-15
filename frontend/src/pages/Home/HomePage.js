import React from 'react';
import ProductItem from '../../components/productItem/ProductItem';
import products from '../../products';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <h1 style={{ marginLeft: '10px' }}>Latest Products</h1>
      <div className="cards-container">
        {products.map((product) => {
          return <ProductItem product={product} key={product._id} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
