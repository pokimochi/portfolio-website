import React from 'react';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";
import avatar from './images/avatar4.svg';
import expo1 from './images/expo1.png';
import ginhawa1 from './images/ginhawa1.png';
import presentation1 from './images/presentation1.png';

function App() {
  return (
    <div className="app">
      <div id="hero-page">
        <div id="hero-center">
          <img id="avatar" alt="Avatar" src={avatar} />
          <div className="hero-title">Matthew Deogracias</div>
          <div className="hero-sub-title">Full Stack Developer</div>
        </div>
      </div>
      <div className="app-content">
        <div id="about">
          <h1 className="section-title">About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse. Sollicitudin ac orci phasellus egestas. In dictum non consectetur a. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
          </span>
        </div>
        <div id="projects">
          <h1 className="section-title">Projects</h1>
          <div class="mdc-layout-grid" style={{padding: 0}}>
            <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell">
                <div className="card">
                  <img className="card-image" src={presentation1} alt="Intro to Websites Thumbnail" />
                  <div className="card-content">
                    <div className="card-title">Intro To Websites</div>
                    <div className="card-description">Taught the basics of HTML, CSS, and JavaScript by walking through the development of a web-based Tic Tac Toe game.</div>
                  </div>
                  <a href="https://codepen.io/poki_mochi/pen/oNgVxye" target="_blank" rel="noopener noreferrer" className="card-button">View</a>
                </div>
              </div>
              <div class="mdc-layout-grid__cell">
                <div className="card">
                  <img className="card-image" src={expo1} alt="Expo Project Thumbnail" />
                  <div className="card-content">
                    <div className="card-title">Miniature Disaster Response Robot</div>
                    <div className="card-description">A miniature disaster response robot that simulates real-life disaster response robots by locating figures in a wooden maze. Showcased at the University of South Florida's Engineering EXPO 2019.</div>
                  </div>
                  <a href="https://github.com/Society-of-Competitive-Programmers/Expo2019" target="_blank" rel="noopener noreferrer" className="card-button">View</a>
                </div>
              </div>
              <div class="mdc-layout-grid__cell">
                <div className="card">
                  <img className="card-image" src={ginhawa1} alt="Ginhawa Thumbnail" />
                  <div className="card-content">
                    <div className="card-title">Non-Profit Website</div>
                    <div className="card-description">Website that offers rehabilitation for abused women, programs on mental-health therapy, and charity work for indigenous Filipino tribes.</div>
                  </div>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="card-button">In Progress</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
