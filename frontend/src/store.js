import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducer";
import { productDetailsReducer } from "./reducers/productDetailsReducer";
import { cartReducer } from "./reducers/cartReducers";
import {
  userReducer,
  userRegisterReducer,
  userProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const getCartItemFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const getUserInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: getCartItemFromLocalStorage },
  userLogin: { userInfo: getUserInfoFromLocalStorage },
};

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userUpdate: userUpdateReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
