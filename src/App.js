import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";

import avatar from './images/hero/avatar.svg';
import LinkedInIcon from './images/hero/linkedin.svg';
import TwitterIcon from './images/hero/twitter.svg';
import GithubIcon from './images/hero/github.svg';
import arrowDown from './images/hero/arrow-down-4.svg';

import expo1 from './images/projects/expo2019/expo1.png';
import ginhawa1 from './images/projects/ginhawa/ginhawa1.png';
import presentation1 from './images/projects/introWebsites/presentation1.png';
import html from './images/technologies/html-5.svg';
import css from './images/technologies/css-5.svg';
import javascript from './images/technologies/javascript.svg';
import heroku from './images/technologies/heroku.svg';
import raspberryPi from './images/technologies/raspberry-pi.svg';
import react from './images/technologies/react-1.svg';
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

  const socialMediaLinks = [
    {
      url: 'https://www.linkedin.com/in/mattdeo/',
      alt: 'LinkedIn',
      icon: LinkedInIcon
    },
    {
      url: 'https://twitter.com/poki_mochi',
      alt: 'LinkedIn',
      icon: TwitterIcon
    },
    {
      url: 'https://github.com/pokimochi',
      alt: 'LinkedIn',
      icon: GithubIcon
    },
  ]

  // TODO Project Popup gallery 
  // - work experience showcase / timeline(to the right of Hi, "I'm Matt")
  // - Arrow animation @ the hero page
  // - content at the about
  // - e-mail link / label
  // - scroll animation on S10 fix
  // - Button hover animation

  // Would like TODO 
  // - inline shadow for hero page OR outer shadow for content
  // - refactor reusables into components
  // - refactor css into multiple modules (per content/section) / Clean CSS

  return (
    <div className="app">
      <div className="hero-page">
        <div className="hero-center">
          <img className="avatar" alt="Avatar" src={avatar} />
          <h1 className="hero-title"> Matthew Deogracias</h1>
          <h1 className="hero-sub-title">Full Stack Developer</h1>
          {
            socialMediaLinks.map(link => {
              return (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={link.alt} className="social-media-links" />
                </a>
              )
            })
          }
        </div>
        {/* <img className="hero-arrow" alt="arrow" src={arrowDown} /> */}
      </div>
      <div className="app-content">
        <ScrollAnimation animateIn="fadeInUp" className="about section mdc-layout-grid mdc-layout-grid__inner" style={{ padding: 0 }}>
          <div class="mdc-layout-grid__cell--span-5 about-description">
            <h1 className="about-title">Hi, I'm Matt</h1>
            <p>I'm a senior Computer Science student at the University of South Florida and my passion is in front-end and UX development.</p>
            <a href="https://drive.google.com/file/d/1wjW76ENYtxKFkrM9U10ZeK0FU0zv7rXL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button">Check Out My Resume!</a>
          </div>
          <div class="mdc-layout-grid__cell--span-7">
            
          </div>
        </ScrollAnimation>
        <div className="projects section">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h2>
              Projects
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce>
            <div class="mdc-layout-grid" style={{ padding: 0 }}>
              <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell card">
                  <img className="card-image" src={presentation1} alt="Intro to Websites Thumbnail" />
                  <h2 className="card-title">Intro To Websites</h2>
                  <p className="card-description">Taught the basics of front-end web development by showing how to develop a web-based Tic-Tac-Toe game.</p>
                  <div className="technology-container">
                    <img className="technology-logo" src={html} alt="html" />
                    <img className="technology-logo" src={css} alt="css" />
                    <img className="technology-logo" src={javascript} alt="javascript" />
                  </div>
                  <a href="https://codepen.io/poki_mochi/pen/oNgVxye" target="_blank" rel="noopener noreferrer" className="button card-button">View Project</a>
                </div>
                <div class="mdc-layout-grid__cell card">
                  <img className="card-image" src={expo1} alt="Expo Project Thumbnail" />
                  <h2 className="card-title">Miniature Disaster Response Robot</h2>
                  <p className="card-description">A robot that locates figurines in hard to reach places. Demonstrated the practical uses of Computer Science to children and families at USF's Engineering EXPO Exhibit 2019.</p>
                  <div className="technology-container">
                    <img className="technology-logo" src={react} alt="reactNative" />
                    <img className="technology-logo" src={raspberryPi} alt="raspberry pi" />
                    <img className="technology-logo" src={heroku} alt="heroku" />
                    <img className="technology-logo" src={socketIO} alt="socket.io" />
                  </div>
                  <a href="https://github.com/Society-of-Competitive-Programmers/Expo2019" target="_blank" rel="noopener noreferrer" className="button card-button">View Project</a>
                </div>
                <div class="mdc-layout-grid__cell card">
                  <img className="card-image" src={ginhawa1} alt="Ginhawa Thumbnail" />
                  <div className="card-content">
                    <h2 className="card-title">Non-Profit Website (In-Progress)</h2>
                    <div className="card-description">Website that offers rehabilitation for abused women, programs on mental-health therapy, and charity work for indigenous Filipino tribes.</div>
                  </div>
                  <div className="technology-container">
                    <img className="technology-logo" src={adobeXD} alt="adobeXD" />
                    <img className="technology-logo" src={react} alt="react" />
                  </div>
                  <a href="https://drive.google.com/file/d/1mqf05vxrexvDqYuLNq2NiFq6vTYFWHhx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button card-button">View Design</a>
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
