import {
  FETCH_DETAILS_START,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAIL,
} from '../constant/productConstant';

const INITIAL_STATE = {
  product: {
    review: [],
  },
};

export const productDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DETAILS_START:
      return { ...state, isLoading: true };
    case FETCH_DETAILS_SUCCESS:
      return { ...state, product: action.payload, isLoading: false };
    case FETCH_DETAILS_FAIL:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};
