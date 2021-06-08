import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// pull in reducers
import productCategories from './categories.js';

let reducers = combineReducers({ productCategories });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

// we call that function because it returns the createStore method created store
export default store();
