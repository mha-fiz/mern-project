import axios from "axios";
import { CART_ADD_ITEM } from "../constant/cartConstant";

export const addItemToCart = (cat, id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${cat}/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      price: data.price,
      image: data.image,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
