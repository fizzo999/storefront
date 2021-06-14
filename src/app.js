import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';


import Header from './components/header/header.js';
import Storefront from './components/storefront/storefront.js';
import Product from './components/products/details.js';
import Cart from './components/cart/checkout.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <Fragment>
      <Header />
      <Route exact path='/' component={Storefront} />
      <Route exact path='/cart' component={Cart} />
      <Route path='/product/:id' component={Product} />
      <Footer />
    </Fragment>
  );
}

export default App;
