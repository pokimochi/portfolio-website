import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    background: "#00192D",
  },
  footer: {
    width: "100vw",
    height: "20vh",
    background: "#001221",
    marginTop: "10vh"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Navbar /> */}
      <HeroPage />
      <Grid container alignContent="center">
        <Grid item xs={1}/>
        <Grid item xs={10}>
          <Paper elevation={3}>
            <h1 style={{height: "100vh", width: "100vw"}}></h1>
          </Paper>
        </Grid>
      </Grid> 
      <div className={classes.footer}>
      </div>
    </div>
  );
}

export default App;
