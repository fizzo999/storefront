import React, { Fragment } from 'react';
import Header from './components/header/header.js';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Footer from './components/footer/footer.js';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Categories />
        <Products />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
