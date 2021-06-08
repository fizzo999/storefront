import React, { Fragment } from 'react';
import Header from './components/header/header.js';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <Fragment>
      <Header />
      <Categories>
      </Categories>
      <Products />
      <Footer />
    </Fragment>
  );
}

export default App;
