import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";

import avatar from './images/hero/avatar.svg';
import { projects, links } from './constants/data';

function App() {

  const socialMediaLinks = links;
  const cards = projects;

  // TODO Project Popup gallery 
  // - work experience showcase / timeline(to the right of Hi, "I'm Matt")
  // - Arrow animation @ the hero page
  // - content at the about
  // - e-mail link / label
  // - Button hover animation
  // - clean CSS

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
                <a href={link.url} key={link.alt} target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={link.alt} className="social-media-links" />
                </a>
              )
            })
          }
        </div>
        {/* <img className="hero-arrow" alt="arrow" src={arrowDown} /> */}
      </div>
      <div className="app-content">
        <ScrollAnimation animateIn="fadeInUp" className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: 0 }} animateOnce>
          <div className="about mdc-layout-grid__cell--span-6">
            <h1 className="about-title">Hi, I'm Matt</h1>
            <p className="about-desc">I'm a senior Computer Science student at the University of South Florida and my passion is in front-end and UX development.</p>
            <a href="https://drive.google.com/file/d/1wjW76ENYtxKFkrM9U10ZeK0FU0zv7rXL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button">Check Out My Resume!</a>
          </div>
          <div className="mdc-layout-grid__cell--span-6">
            
          </div>
        </ScrollAnimation>
        <div className="projects section">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h1>Projects</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce>
            <div className="mdc-layout-grid" style={{ padding: 0 }}>
              <div className="mdc-layout-grid__inner">
                {
                  cards.map(card => 
                    <div key={card.title} className="mdc-layout-grid__cell card">
                      <img className="card-image" src={card.cardImg} alt={card.cardDesc} />
                      <h2 className="card-title">{card.title}</h2>
                      <p className="card-description">{card.desc}</p>
                      <div className="technology-container">
                        {
                          card.techImgs.map((img, index) =>
                            <img key={card.imgDesc[index]} className="technology-logo" style={index === 0 ? { marginLeft: 0 } : {}} src={img} alt={card.imgDesc[index]} />
                          )
                        }
                      </div>
                      <div className="card-button-container">
                        <a href={card.link} target="_blank" rel="noopener noreferrer" className="button card-button">View Project</a>
                      </div> 
                    </div>
                  )
                }
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default App;
