import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root1: {
    position: 'relative',
    height: 120,
    marginTop: 300,
    fontFamily: 'Helvetica',
  },
  root2: {
    position: 'absolute',
    height: 120,
    bottom: 0,
    left: 0,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    textAlign: 'center',
    lineHeight: '12px',
    margin: 0,
    padding: 0,
    color: 'white',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    'hover': {
      color: 'yellow',
    }
  }
});

const footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root1}>
      <AppBar className={classes.root2} >
        <h3>copyright &copy; 2504 - Fizzo Pannosch</h3>
        <h3><a href="https://github.com/fizzo999/storefront" className={classes.a}>github.com/fizzo999/storefront</a></h3>
      </AppBar>
    </div>
  );
};

export default footer;
