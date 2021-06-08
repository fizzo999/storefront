import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productCategories from './categories.js';

let reducers = combineReducers({ productCategories });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
