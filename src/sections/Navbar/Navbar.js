import React from 'react';
import { footerLinks } from '../../AppContent';
import ScrollAnimation from 'react-animate-on-scroll';

const Navbar = () => {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      offset={0}
      animateOnce
    >
      <div className="topnav">
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
        <div className="nav-right">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contact</a>
        </div>
      </div>ˇ
    </ScrollAnimation>
  )
};

export default Navbar;