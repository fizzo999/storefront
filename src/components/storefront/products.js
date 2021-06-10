import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../../store/cart.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

  useEffect(() => {
    setProducts(props.products);
  }, [props.activeCategory]);

  // console.log('we are inside of products AND HERE ARE THE PROPS.activeCategory ======>>>>>', props.activeCategory);
  // console.log('we are inside of products AND HERE ARE THE PROPS.products ======>>>>>', props.products);
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
          {products.map((product, idx) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
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
                    <Typography variant='body2' color='textSecondary' component='p' className={classes.price}>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBottom}>
                  <Button size='small' color='primary'>View Product</Button>
                  <Button size='small' color='primary' onClick={() => props.addToCart(product)}>    Add To Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
          }
        </Grid>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  activeCategory: state.productCategories.activeCategory,
  activeDescription: state.productCategories.activeDescription,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
