import axios from 'axios';
import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_DETAILS_START,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAIL,
} from '../constant/productConstant';

export const fetchProductList = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_START });

    const response = await axios.get('/api/products');

    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
export const fetchProductDetails = (category, id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_DETAILS_START });

    const response = await axios.get(`/api/products/${category}/${id}`);

    dispatch({ type: FETCH_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: FETCH_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
