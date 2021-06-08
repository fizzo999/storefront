import React from 'react';
import { connect } from 'react-redux';
import { categories, reset } from '../../store/categories.js';
import { AppBar } from '@material-ui/core';
// import { Typography, AppBar, Toolbar } from '@material-ui/core';
// import { ShoppingCartIcon } from '@material-ui/icons/ShoppingCart';
// import { makeStyles } from '@material-ui/core/styles';

const Header = (props) => {
  console.log('WELL HERE IS THEM PROPS', props);
  return (
    <div>
      <AppBar position='static'>
        <h1>OUR STORE</h1>
      </AppBar>
      <ul>
        <h2>Browse Our Categories</h2>
        {props.prodCategories.category.map(eachCategory => {
          return <li key={eachCategory.name}> <button onClick={() => props.categories(eachCategory.name)} >
            {eachCategory.name} : {eachCategory.active.toString()} </button></li>;})}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ prodCategories: state.productCategories });

const mapDispatchToProps = { categories, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
