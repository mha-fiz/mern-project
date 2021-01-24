import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDER_DETAILS_START,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  PAY_ORDER_START,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAIL,
  PAY_ORDER_RESET,
  MY_ORDER_LIST_START,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
  MY_ORDER_LIST_LOGOUT,
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

export const orderDetailsReducer = (
  state = { isLoading: true, cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: action.payload,
      };
    case GET_ORDER_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducers = (state = {}, action) => {
  switch (action.type) {
    case PAY_ORDER_START:
      return {
        ...state,
        isLoading: true,
      };
    case PAY_ORDER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case PAY_ORDER_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case PAY_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

export const myOrderListReducers = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_ORDER_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case MY_ORDER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    case MY_ORDER_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case MY_ORDER_LIST_LOGOUT:
      return { orders: [] };
    default:
      return state;
  }
};
