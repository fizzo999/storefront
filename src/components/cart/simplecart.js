import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Typography, Button } from '@material-ui/core/';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Cart = props => {
  console.log('so here we are inside the simplecart =====>>>>>>', props.cart);
  let tempArr;
  tempArr = props.cart.filter((item, index) => {
    return props.cart.indexOf(item) === index;});
  return (
    <>
      <List component='nav' aria-label='secondary mailbox folders'>
        <ListItem>
          <ListItemText primary={
            <Typography
              component='h5'
              variant='body1'
            >
              <ListItemIcon>
                <ShoppingCartIcon color='primary' fontSize='large'/>
              </ListItemIcon>
              Your Shopping Cart
            </Typography>
          } />
        </ListItem>
        {tempArr.map((item,idx) => {
          return (
            <ListItem key={idx} button>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src={item.image} />
              </ListItemAvatar>
              <ListItemText primary={item.product} secondary={
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Typography
                    component='span'
                    variant='body1'
                    style={{ display: 'block' }}
                    color='textPrimary'
                  >
                    Price - ${item.price}
                  </Typography>
                  <Typography
                    component='span'
                    variant='body1'
                    style={{ display: 'block' }}
                    color='textPrimary'
                  >
                    amount: <b>{item.inCart}</b>
                  </Typography>
                </div>
              } />
            </ListItem>
          );
        })}
      </List>
      <Button variant="contained" color="primary" style={{display: 'block', margin: '18px auto', padding: '8px 100px', width: '270px'}} component={Link} to={{pathname: `/cart`}} onClick={props.handleClose}>checkout</Button>
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.products,
  totalItems: state.cart.totalItems
});

export default connect(mapStateToProps)(Cart);
