import React, { Fragment } from 'react';
import Header from './components/header/header.js';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <Fragment>
      <Header>
      name of your virtual store
      </Header>
      <Categories>
      Shows a list of all categories;
      Dispatches an action when one is clicked to “activate” it;
      </Categories>
      <Products>
      Displays a list of products associated with the selected category
      </Products>
      <Footer>
      copyright and contact information
      </Footer>
    </Fragment>
  );
}

export default App;
