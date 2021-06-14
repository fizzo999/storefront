import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, reduceItemInCart } from '../../store/cart.js';

import { makeStyles } from '@material-ui/core/styles';
import { Container, List, ListItem, ListItemAvatar, Button, Avatar } from '@material-ui/core';
import { AddBox, IndeterminateCheckBox, DeleteForever } from '@material-ui/icons';

// import { removeItemFromCart } from '../../store/cart'
// import { incrementRemoteData } from '../../store/actions'

const useStyles = makeStyles({
  bold: {
    fontSize: '18px',
    fontWeight: 600
  },
  avatar:{
    margin: '18px',
    width: '200px',
    height: '200px'

  },
  button: {
    margin: '12px'
  },
});

const Cart = props => {
  const classes = useStyles();

  const total = (arr) => {
    let total = 0;
    arr.forEach(item => {
      total = total + item.price;
    });  
    return total;
  };

  let totalPrice = total(props.cart).toFixed(2);

  let tempArr;
  tempArr = props.cart.filter((item, index) => {
    return props.cart.indexOf(item) === index;});

  console.log('here is the state =====>>>>>', props.state);
  console.log('here is the cart =====>>>>>', props.cart);
  console.log('here is the totalItems =====>>>>>', props.totalItems);

  return(
    <React.Fragment>
      <Container maxWidth="md">
        <List>
          {tempArr.map((product, index) =>{
            return(
              <ListItem className="checkout-list" key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <ListItemAvatar >
                  <Avatar alt={product.product} src={product.image} className={classes.avatar}/>
                  <span>{product.product.toUpperCase()}</span>
                </ListItemAvatar>
                <ListItem>
                  <span className={classes.bold} >${product.price}</span>
                  <DeleteForever className={classes.button} onClick={() => props.removeFromCart(product)}/>
                  <AddBox className={classes.button} onClick={() => props.addToCart(product)}/>
                  <IndeterminateCheckBox className={classes.button} onClick={() => props.reduceItemInCart(product)}/>
                  <span className={classes.bold} > quantity: {product.inCart}</span>
                </ListItem>
              </ListItem>
            );
          })}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <p className={classes.bold}>Total</p>
            <p className={classes.bold}>${totalPrice}</p>
          </div>
          {/* <p>Credit Card stuff will go here</p> */}
          <Button variant="contained" color="secondary" style={{display: 'block', margin: '18px auto', padding: '8px 66px', width: '300px'}} component={Link} to={{pathname: `/`}}>
              Back to all products
          </Button>
          <Button variant="contained" color="primary" style={{display: 'block', margin: '18px auto', padding: '8px 78px', width: '300px'}} component={Link} to={{pathname: `/cart`}}>
              PAY w/ CREDIT CARD
          </Button>
        </List>
      </Container>

    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  totalItems: state.cart.totalItems,
  cart: state.cart.products,
});

const mapDispatchToProps = { removeFromCart, reduceItemInCart, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
