import React from 'react';
import { connect } from 'react-redux';

import { categories, reset } from '../../store/categories.js';

const header = (props) => {
  console.log('WELL HERE IS THEM PROPS', props);
  return (
    <div>
      <h1>name of your virtual store HERE</h1>
      <ul>
        hello from shit 
        {props.prodCategories.category.map(eachCategory => {
          return <li onClick={() => props.categories(eachCategory.name)} key={eachCategory.name}>
            {eachCategory.name} : {eachCategory.active.toString()} </li>;})}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ prodCategories: state.productCategories });

const mapDispatchToProps = { categories, reset };

export default connect(mapStateToProps, mapDispatchToProps)(header);
