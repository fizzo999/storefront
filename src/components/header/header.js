import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../../store/categories.js';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Button, Popover } from '@material-ui/core';

import Cart from '../cart/simplecart.js';
// import { ShoppingCartIcon } from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  catButtons: {
    display: 'inline',
    margin: 23,
  },
  root: {
    textAlign: 'center',
  }

});

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  console.log('WELL HERE IS THEM PROPS', props.activeCategory);
  return (
    <>
      <AppBar position='static'>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
              FIZZOs Storefront
          </Typography>
          <Button color="inherit" onClick={handleClick} className="cart">Cart <span>({props.cart.length})</span></Button>
        </Toolbar>
        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}} transformOrigin={{ vertical: 'top', horizontal: 'center'}}>
          <Cart />
        </Popover>
      </AppBar>
      <Container className={classes.root}>
        <ul>
          <h1>Browse Our Categories - ShoppingCartItems: {props.cart.length}</h1>
          <Button onClick={() => props.selectCategory('')} variant='contained' size='large' style={{backgoundColor:'green'}}>select all</Button>
          {props.prodCategories.categories.map(eachCategory => {
            return <li key={eachCategory.name} className={classes.catButtons}> <Button onClick={() => props.selectCategory(eachCategory.name)} variant='contained' size='large' color={props.activeCategory === eachCategory.name ? 'secondary': 'primary'}>
              {eachCategory.name}</Button></li>;})}
        </ul>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  prodCategories: state.productCategories,
  cart: state.cart,
  activeCategory: state.productCategories.activeCategory
});

const mapDispatchToProps = { selectCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
