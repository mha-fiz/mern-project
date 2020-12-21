import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
} from '../constant/productConstant';

const INITIAL_STATE = {
  products: [],
  errorMessage: null,
  isLoading: false,
};

export const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, isLoading: false, errorMessage: action.payload };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    default:
      return state;
  }
};
