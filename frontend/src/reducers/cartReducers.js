import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constant/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  const selectedItem = action.payload;

  switch (action.type) {
    case CART_ADD_ITEM:
      const isItemExist = state.cartItems.find((x) => x.id === selectedItem.id);

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === selectedItem.id ? selectedItem : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, selectedItem],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== selectedItem),
      };

    default:
      return state;
  }
};
