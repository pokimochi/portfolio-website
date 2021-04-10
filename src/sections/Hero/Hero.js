import React from 'react';

import { heroImage } from '../../AppContent';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = (props) => {
  return (
    <div id="hero-page" className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0" }}>
      <div id="hero-left" className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone">
        <ScrollAnimation
          animateIn="fadeIn"
          offset={0}
          animateOnce
        >
          <h1 id="hero-title">Hello World!</h1>
          <h1 className="hero-sub-title">Matthew Deogracias</h1>
          <h1 className="hero-sub-title">Full Stack Software Developer</h1>
        </ScrollAnimation>
      </div>
      <div id="hero-right" className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone">
        <ScrollAnimation
          animateIn="fadeIn"
          offset={0}
          animateOnce
        >
          <img onLoad={props.handleResourceLoad} className="hero-image" alt="Matthew Deogracias Writing Code" src={heroImage} />
        </ScrollAnimation>
      </div>
    </div>
  )
};

export default Hero;