import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import getDataOnlineReducer from './reducers.js';
import productCategoriesReducer from './categories.js';
import productsReducer from './products.js';
import cartReducer from './cart.js';

let allReducers = combineReducers({
  data: getDataOnlineReducer,
  productCategories: productCategoriesReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = () => {
  console.log(createStore(allReducers, applyMiddleware(thunk)));
  return createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
