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
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Products = (props) => {
  const classes = useStyles();
  const [products, setProducts] = useState(props.products.filter(product => product.inventory > 0));

  useEffect(() => {
    setProducts(props.products);
  }, [props.activeCategory]);

  console.log('we are inside of products AND HERE ARE THE PROPS.activeCategory ======>>>>>', props.activeCategory);
  console.log('we are inside of products AND HERE ARE THE PROPS.products ======>>>>>', props.products);



  return (
    <>
      <Typography variant='h3' style={{ marginTop: '50px' }}>
        Products - {props.activeCategory || 'all products'}
      </Typography>
      <div className='products'>
        {
          products.map((product, idx) => {
            return (
              <Card key={idx} className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={product.image} title={product.product}/>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {product.product}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      {product.description}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>View Product</Button>
                  <Button size='small' color='primary' onClick={() => props.addToCart(product)}>    Add To Cart</Button>
                </CardActions>
              </Card>
            );
          })
        }
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  activeCategory: state.productCategories.activeCategory
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
