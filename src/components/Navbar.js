import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: "transparent",
    boxShadow: "none",
  },
  toolbar: {
    float: "right"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Button disableRipple color="inherit">About</Button>
          <Button disableRipple color="inherit">Education</Button>
          <Button disableRipple color="inherit">Experience</Button>
          <Button disableRipple color="inherit">Projects</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}