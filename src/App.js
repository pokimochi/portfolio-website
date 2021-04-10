import React, { useState, useEffect } from 'react';
import './App.css';
import { numContent } from './AppContent';
import "@material/layout-grid/mdc-layout-grid.scss";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import 'react-image-lightbox/style.css';

import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contacts';
import Footer from './sections/Footer/Footer';

function App() {
  // Resource loading states
  const [numResources, setNumResources] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [numLoaded, setNumLoaded] = useState(0);

  const override = css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    top: 45%;
  `;

  // Set number of resources loaded
  useEffect(() => {
    setNumResources(numContent());
  },
    []
  );

  // Check if all resources are loaded
  const handleResourceLoad = () => {
    setNumLoaded(numLoaded + 1);

    if (numResources === numLoaded) {
      setLoaded(true);
    }
  }

  return (
    <div className="app">
      <div id="loading-screen" style={{ display: !isLoaded ? "block" : "none" }}>
        <PacmanLoader
          size={90}
          color="#1abc9c"
          loading={!isLoaded}
          css={override}
        />
      </div>
      <div style={{ display: isLoaded ? "block" : "none" }}>
        <Navbar />
        <Hero handleResourceLoad={handleResourceLoad}/>
        <div id="app-content">
          <About />
          <Projects handleResourceLoad={handleResourceLoad} />
          <Contact />
          <Footer handleResourceLoad={handleResourceLoad} />
        </div>
      </div>
    </div>
  );
}

export default App;
