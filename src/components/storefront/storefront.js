import React from 'react';
import Container from '@material-ui/core/Container';

import Categories from './categories';
import Products from './products';

export default function Storefront() {
  return (
    <>
      <Container>
        <Categories />
        <Products />
      </Container>
    </>
  );
}
