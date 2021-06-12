import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Typography, Button } from '@material-ui/core/';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Cart = props => {
  console.log('so here we are inside the simplecart =====>>>>>>', props.cart);
  return (
    <>
      <List component='nav' aria-label='secondary mailbox folders'>
        <ListItem>
          <ListItemText primary={
            <Typography
              component='p'
              variant='body1'
            >
              <ListItemIcon>
                <ShoppingCartIcon color='primary' fontSize='large'/>
              </ListItemIcon>
              Your Shopping Cart
            </Typography>
          } />
        </ListItem>
        {props.cart.map(item => {
          return (
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src={item.image} />
              </ListItemAvatar>

              <ListItemText primary={item.product} secondary={
                <>
                  <Typography
                    component='span'
                    variant='body2'
                    style={{ display: 'block' }}
                    color='textPrimary'
                  >
                    Price - ${item.price}
                  </Typography>
                </>
              } />
            </ListItem>
          );
        })}

      </List>
      <Button variant='contained' color='primary' style={{display: 'block', margin:'12px auto', background: 'green'}} >checkout</Button>
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
