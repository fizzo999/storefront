import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root1: {
    position: 'relative',
    height: 100,
    marginTop: 300,
    fontFamily: 'Helvetica',
  },
  root2: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    textAlign: 'center'
  },

});

const footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root1}>
      <AppBar className={classes.root2} >
        <h2>copyright &copy; 2504</h2>
      </AppBar>
    </div>
  );
};

export default footer;
