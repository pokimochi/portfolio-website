import React from 'react';
import { footerLinks } from '../../AppContent';
import ScrollAnimation from 'react-animate-on-scroll';

const Navbar = () => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      className="topnav"
      offset={0}
      animateOnce
    >
      <div className="nav-left">
        {
          footerLinks.map(footer =>
            <a
              key={"topnav-external-link-" + footer.alt}
              alt={footer.alt.concat(" Link")}
              href={footer.url}
              target="_blank"
              rel="noopener noreferrer">
              {footer.alt}
            </a>
          )
        }
      </div>
      <div className="nav-right">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact</a>
      </div>
    </ScrollAnimation>
  )
};

export default Navbar;