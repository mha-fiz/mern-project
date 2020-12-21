import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducer';
import { productDetailsReducer } from './reducers/productDetailsReducer';

const initialState = {};

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
