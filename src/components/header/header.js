import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../../store/categories.js';

import { Typography, AppBar, Toolbar, Button, Popover } from '@material-ui/core';

import Cart from '../cart/simplecart.js';
// import { ShoppingCartIcon } from '@material-ui/icons/ShoppingCart';


const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


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
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = { selectCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
