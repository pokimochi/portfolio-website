// Projects
import expo1 from './images/projects/expo2019/expo1.png';
import ginhawa1 from './images/projects/ginhawa/ginhawa1.png';
import presentation from './images/projects/introWebsites/presentation1.png';
import pickup from './images/projects/pickup/pickup-search.png';

// Technologies
import html from './images/technologies/html-5.svg';
import css from './images/technologies/css-3.svg';
import javascript from './images/technologies/javascript.svg';
import heroku from './images/technologies/heroku.svg';
import raspberryPi from './images/technologies/raspberry-pi.svg';
import react from './images/technologies/react-1.svg';
import socketIO from './images/technologies/socket-io.svg';
import adobeXD from './images/technologies/adobe-xd-1.svg';
import android from './images/technologies/android-icon.svg';
import express from './images/technologies/express.svg';

// Hero Page
import avatar from './images/hero/avatar.svg';
import LinkedInIcon from './images/hero/linkedin.svg';
import TwitterIcon from './images/hero/twitter.svg';
import GithubIcon from './images/hero/github.svg';

// About Page
import aboutImage from './images/about/laptop.svg'

// Footer icon
import LinkedInFooter from './images/footer/linkedin.svg';
import TwitterFooter from './images/footer/twitter.svg';
import GithubFooter from './images/footer/github.svg';

const projectCards = [
  {
    title: 'Intro To Websites Workshop',
    cardImg: presentation,
    imgDesc: 'Intro to Websites Thumbnail',
    desc: 'Taught basic web development to University of South Florida students by walking them through how to develop a Tic-Tac-Toe web app.',
    techImgs: [
      html,
      css,
      javascript
    ],
    techDesc: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    link: 'https://codepen.io/poki_mochi/pen/oNgVxye'
  },
  {
    title: 'Mini-Disaster Response Robot',
    cardImg: expo1,
    imgDesc: 'Expo Project Thumbnail',
    desc: 'A robot that locates figurines inside a maze. Demonstrated the practical uses of Computer Science to students and families at the USF Engineering EXPO Exhibit 2019.',
    techImgs: [
      react,
      heroku,
      socketIO,
      raspberryPi
    ],
    techDesc: [
      'React',
      'Heroku',
      'Socket.io',
      'Raspberry Pi'
    ],
    link: 'https://github.com/Society-of-Competitive-Programmers/Expo2019'
  },
  {
    title: 'Non-Profit Website (WIP)',
    cardImg: ginhawa1,
    imgDesc: 'Ginhawa Thumbnail',
    desc: 'Designed a mockup for a Filipino non-profit organization that offers rehabilitation programs, programs on mental-health therapy, and charity work for indigenous Filipino tribes.',
    techImgs: [
      adobeXD
    ],
    techDesc: [
      'React',
      'AdobeXD'
    ],
    link: 'https://drive.google.com/file/d/1mqf05vxrexvDqYuLNq2NiFq6vTYFWHhx/view?usp=sharing'
  },
  {
    title: 'Pickup Sports Android App',
    cardImg: pickup,
    imgDesc: 'Pickup Thumbnail',
    desc: 'An Android app for finding, creating and joining nearby casual sports games.',
    techImgs: [
      android,
      express,
      adobeXD
    ],
    techDesc: [
      'Android Studio',
      'Express.js',
      'AdobeXD'
    ],
    link: 'https://github.com/pokimochi/Pickup-Android'
  }
]

const socialMediaLinks = [
  {
    url: 'https://www.linkedin.com/in/mattdeo/',
    alt: 'LinkedIn',
    icon: LinkedInIcon
  },
  {
    url: 'https://github.com/pokimochi',
    alt: 'Github',
    icon: GithubIcon
  },
  {
    url: 'https://twitter.com/poki_mochi',
    alt: 'Twitter',
    icon: TwitterIcon
  },
]

const footerLinks = [
  {
    url: 'https://www.linkedin.com/in/mattdeo/',
    alt: 'LinkedIn',
    icon: LinkedInFooter
  },
  {
    url: 'https://github.com/pokimochi',
    alt: 'Github',
    icon: GithubFooter
  },
  {
    url: 'https://twitter.com/poki_mochi',
    alt: 'Twitter',
    icon: TwitterFooter
  },
]

// Returns the number of resources needed to load
const numContent = () => {
  return projectCards.length + socialMediaLinks.length + footerLinks.length + 2;
}

export {
  projectCards,
  socialMediaLinks,
  avatar,
  aboutImage,
  footerLinks,
  numContent
}