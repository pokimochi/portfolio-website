import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";
import avatar from './images/hero/avatar.svg';
import expo1 from './images/projects/expo2019/expo1.png';
import ginhawa1 from './images/projects/ginhawa/ginhawa1.png';
import presentation1 from './images/projects/introWebsites/presentation1.png';
import linkedin from './images/hero/linkedin.svg';
import twitter from './images/hero/twitter.svg';
import github from './images/hero/github.svg';
import html from './images/technologies/html-5.svg';
import css from './images/technologies/css-5.svg';
import javascript from './images/technologies/javascript.svg';
import heroku from './images/technologies/heroku.svg';
import raspberryPi from './images/technologies/raspberry-pi.svg';
import reactNative from './images/technologies/react-1.svg';
import socketIO from './images/technologies/socket-io.svg';
import adobeXD from './images/technologies/adobe-xd-1.svg';

function App() {

  const images = {
    websitePresentation: [
      {
        original: '',
        thumbnail: '',
      },
    ],
    dre: [
      {
        original: '',
        thumbnail: '',
      },
    ],
    ginhawa: [
      {
        original: '',
        thumbnail: '',
      },
    ],
  }

  // TODO Popup gallery

  return (
    <div className="app">
      <div id="hero-page">
        <div id="hero-center">
          <ScrollAnimation animateIn="fadeInUp" animateOnce offset={-1000}>
            <img id="avatar" alt="Avatar" src={avatar} />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce offset={-1000}>
            <div className="hero-title">Matthew Deogracias</div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={1750} animateOnce offset={-1000}>
            <div className="hero-sub-title">Full Stack Developer</div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={2500} animateOnce offset={-1000}>
            <a href="https://www.linkedin.com/in/mattdeo/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="social-media-links" />
            </a>
            <a href="https://twitter.com/poki_mochi" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="social-media-links" />
            </a>
            <a href="https://github.com/pokimochi" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Github" className="social-media-links" />
            </a>
          </ScrollAnimation>
        </div>
      </div>
      <div className="app-content">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="about">
            <div class="mdc-layout-grid" style={{ padding: 0 }}>
              <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell--span-6">
                  <div id="about-title">Hi, I'm Matt</div>
                  <span className="section-content">
                    I'm a senior Computer Science student at the University of South Florida and my passion is in front-end and UX development.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <div className="projects section">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h1 className="section-title">Projects</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce>
            <div class="mdc-layout-grid" style={{ padding: 0 }}>
              <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell card">
                  <img className="card-image" src={presentation1} alt="Intro to Websites Thumbnail" />
                  <div className="card-content">
                    <div className="card-title">Intro To Websites</div>
                    <div className="card-description">Taught the basics of web development by walking through how to make a web-based Tic Tac Toe game.</div>
                  </div>
                  <div className="technologies-container">
                    <img className="technology-logo" src={html} alt="html" />
                    <img className="technology-logo" src={css} alt="css" />
                    <img className="technology-logo" src={javascript} alt="javascript" />
                  </div>
                  <a href="https://codepen.io/poki_mochi/pen/oNgVxye" target="_blank" rel="noopener noreferrer" className="card-button">View Project</a>
                </div>
                <div class="mdc-layout-grid__cell card">
                  <img className="card-image" src={expo1} alt="Expo Project Thumbnail" />
                  <div className="card-content">
                    <div className="card-title">Miniature Disaster Response Robot</div>
                    <div className="card-description">A miniature disaster response robot that simulates real-life disaster response robots by locating figures in a wooden maze. Showcased at the University of South Florida's Engineering EXPO 2019.</div>
                  </div>
                  <div className="technologies-container">
                    <img className="technology-logo" src={reactNative} alt="html" />
                    <img className="technology-logo" src={raspberryPi} alt="css" />
                    <img className="technology-logo" src={heroku} alt="javascript" />
                    <img className="technology-logo" src={socketIO} alt="javascript" />
                  </div>
                  <a href="https://github.com/Society-of-Competitive-Programmers/Expo2019" target="_blank" rel="noopener noreferrer" className="card-button">View Project</a>
                </div>
                <div class="mdc-layout-grid__cell card">
                  <img className="card-image" src={ginhawa1} alt="Ginhawa Thumbnail" />
                  <div className="card-content">
                    <div className="card-title">Non-Profit Website</div>
                    <div className="card-description">Website that offers rehabilitation for abused women, programs on mental-health therapy, and charity work for indigenous Filipino tribes.</div>
                  </div>
                  <div className="technologies-container">
                    <img className="technology-logo" src={adobeXD} alt="html" />
                  </div>
                  <a href="https://drive.google.com/file/d/1mqf05vxrexvDqYuLNq2NiFq6vTYFWHhx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="card-button">View Design</a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default App;
