import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={{ margin: '40vh 40vw' }}>
      <Loader type="ThreeDots" color="#151d28" height={100} width={100} />
    </div>
  );
};

export default Spinner;
