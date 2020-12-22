import { CART_ADD_ITEM } from "../constant/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const isItemExist = state.cartItems.find((x) => x.id === item.id);

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.id === item.id ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
