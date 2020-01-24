import React from 'react';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";
import avatar from './images/man.svg';

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <div id="hero-page">
          <div id="hero-center">
            <img id="avatar" alt="Avatar" src={avatar} />
            <h1>Matthew Deogracias</h1>
            <h3>Full Stack Developer</h3>
            <div>
            </div>
          </div>
        </div>

        <div id="about">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac habitasse. Sollicitudin ac orci phasellus egestas. In dictum non consectetur a. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
          </span>
        </div>

        <div id="projects">
          <h1>Projects</h1>
            <div class="mdc-layout-grid">
              <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell">
                  <div className="card">
                    Test
                  </div>
                </div>
                <div class="mdc-layout-grid__cell">
                  <div className="card">
                    Test
                  </div>
                </div>
                <div class="mdc-layout-grid__cell">
                  <div className="card">
                    Test
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div id="contact">
          <h1>Contact Me</h1>

        </div>
      </div>

      <div id="footer">

      </div>
    </div>
  );
}

export default App;
