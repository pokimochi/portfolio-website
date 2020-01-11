import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import { PARTICLES_CONFIG } from './../config/particlesjs-config';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "30vw",
    height: "50vh",
    transform: "translate(-50%, -50%)",
    background: "#DEE5E5",
    borderRadius: "50%",
    padding: "3%",
    textAlign: "center",
    borderColor: "#214168",
    borderStyle: "solid",
    borderWidth: "5px"
  },
  mainTitle: {
    color: "#214168",
    fontSize: "9vw",
  },
  subTitle: {
    color: "#00192D",
    fontSize: "4vw",
  }
}));

export default function HeroPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Particles height="100vh" width="100vw" params={PARTICLES_CONFIG} />
      <div className={classes.content}>
        <div className={classes.mainTitle}>
          <ScrollAnimation animateOnce animateIn="fadeIn">
            Hi
          </ScrollAnimation> 
        </div>
        {/* <div className={classes.subTitle}>
          <ScrollAnimation animateOnce animateIn="fadeIn" delay={1250}>
            I'm Matt
          </ScrollAnimation> 
        </div>
        <div className={classes.subTitle}>
          <ScrollAnimation animateOnce animateIn="fadeIn" delay={2250}>
            I write software
          </ScrollAnimation> 
        </div> */}
      </div>
    </div>
  );
}