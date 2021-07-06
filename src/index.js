import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/index.js';
import App from './app.js';

function Entry() {
  // console.log('we are inside of top level APP and here is store', store);
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<Entry/>, root);
