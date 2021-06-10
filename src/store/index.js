import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers.js';

import productCategories from './categories.js';
import products from './products.js';
import cart from './cart.js';

let allReducers = combineReducers({
  data: reducer,
  productCategories,
  products,
  cart
});

const store = () => {
  console.log(createStore(allReducers, applyMiddleware(thunk)));
  return createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
