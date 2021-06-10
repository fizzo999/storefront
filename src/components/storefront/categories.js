import React from 'react';

// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import { Typography, Button, Container } from '@material-ui/core';


import { connect } from 'react-redux';
import { getCategories, selectCategory, reset } from '../../store/categories';

const useStyles = makeStyles({
  catButtons: {
    display: 'inline',
    margin: 23,
  },
  root: {
    textAlign: 'center',
  }

});


const Categories = (props) => {
  const classes = useStyles();
  console.log('so here we are inside the categories of storefront and here are the prop ======>>>>>', props);
  return (
    <>
      <Container className={classes.root}>
        <Typography variant='h4' gutterBottom={true} style={{ marginTop: '2rem', textAlign: 'center' }}>
          Browse our Categories - ShoppingCartItems: {props.cart.length}
        </Typography>
        <ul>
          <Button onClick={() => props.selectCategory('')} variant='contained' size='large' style={{backgoundColor:'green'}}>select all</Button>
          {props.categories.map(eachCategory => {
            return <li key={eachCategory.name} className={classes.catButtons}> <Button onClick={() => props.selectCategory(eachCategory.name)} variant='contained' size='large' color={props.activeCategory === eachCategory.name ? 'secondary': 'primary'}>
              {eachCategory.name}</Button></li>;})}
        </ul>
      </Container>
      {/* <Typography >
        <Link href='#' className='category-links' onClick={() => props.selectCategory('')}>All</Link>
        {props.categories.map((category, idx) => {
          return <Link key={idx} href='#' className='category-links' onClick={e => props.selectCategory(e.target.innerHTML)}>{category.name}</Link>;
        })}
      </Typography> */}
    </>
  );
};


const mapStateToProps = state => ({
  categories: state.productCategories.categories,
  prodCategories: state.productCategories,
  cart: state.cart,
  activeCategory: state.productCategories.activeCategory
});

const mapDispatchToProps = { getCategories, selectCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
