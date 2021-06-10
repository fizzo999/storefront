import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// pull in reducers
import productCategories from './categories.js';
import products from './products.js';
import cart from './cart.js';

let reducers = combineReducers({ productCategories, products, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

// we call that function because it returns the createStore method created store
export default store();
