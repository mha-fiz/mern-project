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
import { createOrderReducer } from "./reducers/orderReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userLogin"],
  transforms: [
    encryptTransform({
      secretKey: "shoplabUserInfo",
      onError: function (error) {
        console.error(error);
      },
    }),
  ],
};

const getCartItemFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// const getUserInfoFromLocalStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

const getShippingAddressFromLocalStorage = localStorage.getItem(
  "shippingAddress"
)
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: getCartItemFromLocalStorage,
    shippingAddress: getShippingAddressFromLocalStorage,
  },
  // userLogin: { userInfo: getUserInfoFromLocalStorage },
};

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userUpdate: userUpdateReducer,
  orderCreate: createOrderReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
