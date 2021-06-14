import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart.js';

import { Container, Card, CardActionArea, CardContent, CardMedia, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
  },
  media: {
    height: 300,
    margin: 20
  },
});

const ProductDetails = (props) => {
  const classes = useStyles();

  let singleProduct = props.location.state;
  console.log('=======================>>>>>>>', singleProduct);

  return (
    <>
      <Container>
        <Typography className="page-header" variant="h2" gutterBottom align="center">{singleProduct.product.toUpperCase()}</Typography>
        <Card className={classes.root} display="flex" >
          <CardActionArea>
            <CardMedia className={classes.media} image={singleProduct.image} />
            <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h5" component="h2">
                In Stock: {singleProduct.inventory}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${singleProduct.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button variant="contained" color="primary" style={{display: 'block', margin: '18px auto', padding: '8px 54px'}} onClick={() => props.addToCart(singleProduct)}>
          Buy
        </Button>
        <Typography variant="h4" gutterBottom align="center">Product Details</Typography>
        <Typography variant="body1" gutterBottom align="center">{singleProduct.description}</Typography>
        <Button variant="contained" color="secondary" style={{display: 'block', margin: '18px auto', padding: '8px 66px', width: '300px'}} component={Link} to={{pathname: `/`}}>
            Back to all products
        </Button>
        <Button variant="contained" color="primary" style={{display: 'block', margin: '18px auto', padding: '8px 70px', width: '300px'}} component={Link} to={{pathname: `/cart`}}>
            Go to shopping cart
        </Button>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
