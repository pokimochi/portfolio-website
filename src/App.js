import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";

import avatar from './images/hero/avatar.svg';
import laptop from './images/about/laptop.svg'
import { projects, links } from './AppContent';

function App() {

  const socialMediaLinks = links;
  const cards = projects;

  return (
    <div className="app">
      <div className="hero-page">
        <div className="hero-center">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <img className="avatar" alt="Avatar" src={avatar} />
            <h1 className="hero-title"> Matthew Deogracias</h1>
            <h1 className="hero-sub-title">Software Developer</h1>
            {
              socialMediaLinks.map(link => {
                return (
                  <a href={link.url} key={link.alt} target="_blank" rel="noopener noreferrer">
                    <img src={link.icon} alt={link.alt} className="social-media-links" />
                  </a>
                )
              })
            }
          </ScrollAnimation>
        </div>
      </div>
      <div className="app-content">
        <div className="about">
          <div className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0" }}>
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone about-container" style={{paddingRight: "10%"}}>
              <ScrollAnimation animateIn="slideInUp" animateOnce>
                <h1 className="about-title">Hi, I'm Matt</h1>
                <p className="about-description">I'm an undergrad at the University of South Florida majoring in Computer Science and an incoming Junior Software Developer at a major fintech company in Tampa. Most of my work involves designing and developing UI.</p>
                <br />
                <div>
                  <a href="https://drive.google.com/file/d/1HlJG5tdGSwXcprGDyU1JAYVko1u5jrja/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                    style={{ display: "inline-block"}}
                  >
                    Check Out My Resume!
                  </a>
                </div>
              </ScrollAnimation>
            </div>
            <div className="mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone about-container">
              <ScrollAnimation animateIn="slideInUp" animateOnce>
                <img src={laptop} className="about-image" alt="laptop" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="projects">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h1 className="projects-title">Projects</h1>
          </ScrollAnimation>
          <div className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0"}} >
            {
              cards.map(card => 
                <ScrollAnimation key={card.title} animateIn="slideInUp" className="mdc-layout-grid__cell--span-4 card" animateOnce>
                  <img className="card-image" src={card.cardImg} alt={card.cardDesc} />
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-description">{card.desc}</p>
                  <div className="technology-container">
                    {
                      card.techImgs.map((img, index) =>
                        <img key={card.imgDesc[index]} className="technology-logo" style={index === 0 ? { marginLeft: 0 } : {}} src={img} alt={card.techDesc[index]} />
                      )
                    }
                  </div>
                  <div className="card-button-container">
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="button card-button">View Project</a>
                  </div> 
                </ScrollAnimation>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
