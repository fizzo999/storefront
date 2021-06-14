import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addToCart } from '../../store/cart.js';
import { getRemoteData } from '../../store/actions.js';

import { makeStyles, Card, CardActions, CardActionArea, CardMedia, CardContent, Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    margin: '20px 0',
    textAlign: 'center',
  },
  root: {
    maxWidth: 345,
    maxHeight: 600,
  },
  media: {
    minHeight: 200,
    maxHeight: 200,
    maxWidth: 130,
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'justify',
  },
  price: {
    textAlign:'center',
    marginTop: 12,
    color: 'black',
    fontSize: '18px',
    marginBottom: -18,
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

const Products = (props) => {
  const classes = useStyles();
  const [products, setProducts] = useState(props.products.filter(product => product.inventory > 0));
  
  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  };
  
  useEffect(() => {
    setProducts(props.products.filter(product => product.inventory > 0));
  }, [props.activeCategory]);

  return (
    <>
      <Typography variant='h3' className={classes.header} >
        Products - {props.activeCategory || 'all products'}
      </Typography>
      <Typography variant='h6' className={classes.header} >
        {props.activeDescription}
      </Typography>
      <div className='products'>
        <Grid container spacing={4}>
          {products.map((product, idx) => {
            if(product.inventory > 0) {
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card key={idx} className={classes.root}>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={product.image} title={product.product}/>
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2' className={classes.title}>
                          {product.product}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p' className={classes.description}>
                          {product.description}
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Typography variant='body2' color='textSecondary' component='p' className={classes.price}>
                            ${product.price}
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p' className={classes.price}>
                            {product.inventory} in stock
                          </Typography>
                        </div>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardBottom}>
                      <Button size='small' color='primary' component={Link} to={`/product/${product._id}`}>View Product</Button>
                      <Button size='small' color='primary' onClick={() => {props.addToCart(product);}}>
                        Add To Cart</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
        <button onClick={fetchData}>Go get ONLINE info!</button>
        {/* {props.data ? props.data.results.map((record, idx) => (
          <form key={idx}>
            <input type="text" placeholder={record.text} />
            <input type="hidden" name="id" defaultValue={record.id} />
          </form>
        )) : '' } */}
        {props.data.results}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  activeCategory: state.productCategories.activeCategory,
  activeDescription: state.productCategories.activeDescription,
  data: state.data
});

// const mapDispatchToProps = { addToCart };
const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(getRemoteData()),
  addToCart: (obj) => dispatch(addToCart(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
