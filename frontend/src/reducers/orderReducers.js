import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from "../constant/orderConstant";

export const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_START:
      return {
        isLoading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        success: true,
      };
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
