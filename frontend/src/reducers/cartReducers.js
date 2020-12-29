import {
  CART_ADD_ITEM,
  CART_ADD_SHIPPING_ADDRESS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
} from "../constant/cartConstant";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
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
    case CART_ADD_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};
