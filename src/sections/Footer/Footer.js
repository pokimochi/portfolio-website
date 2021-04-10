import React from 'react';

import { footerLinks } from '../../AppContent';

const Footer = (props) => {
  return (
    <div id="footer">
      <p>
        Made by Matthew Deogracias
            <br />
        <a id="attribution" href="https://www.freepik.com/vectors/technology">Technology vector created by stories - www.freepik.com</a>
      </p>
      {
        footerLinks.map(link => 
          <a href={link.url} key={link.alt} target="_blank" rel="noopener noreferrer">
            <img onLoad={props.handleResourceLoad} src={link.icon} alt={link.alt} className="footer-icons" />
          </a>
        )
      }
    </div>
  )
};

export default Footer;