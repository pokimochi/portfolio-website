// Projects

// Expo
import expo1 from './images/projects/expo2019/expo1.png';
import expo2 from './images/projects/expo2019/IMG_1224.png';
import expo3 from './images/projects/expo2019/IMG_1230.png';
import expo4 from './images/projects/expo2019/IMG_1246.jpg';
import expo5 from './images/projects/expo2019/IMG_1266.png';

// Intro to Websites
import presentation from './images/projects/introWebsites/presentation1.png';

// Pickup
import pickup1 from './images/projects/pickup/thumbnail.png';
import pickup2 from './images/projects/pickup/create.png';
import pickup3 from './images/projects/pickup/profile.png';
import pickup4 from './images/projects/pickup/search.png';

// Patfolio
import portfolio2 from './images/projects/patfolio/portfolio.png';

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
import heroImage from './images/hero/heroImage.svg';

// About Page
import aboutImage from './images/about/laptop.svg'

// Footer icon
import LinkedInFooter from './images/footer/linkedin-original.svg';
import TwitterFooter from './images/footer/twitter-original.svg';
import GithubFooter from './images/footer/github-original.svg';

const projectCards = [
  {
    title: 'Intro To Websites Workshop',
    cardImg: presentation,
    galleryImgs: [
      presentation
    ],
    imgDesc: 'Intro to Websites',
    desc: 'Taught the basics of web development to University of South Florida students by walking them through how to create Tic-Tac-Toe game using HTML, CSS, and JavaScript.',
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
    galleryImgs: [
      expo2,
      expo3,
      expo4,
      expo5
    ],
    imgDesc: 'Expo Project',
    desc: 'Led a team to develop a miniature disaster response robot which demonstrated the practical uses of Computer Science to 1st to 12th grade students and their families at USF’s Engineering EXPO 2019',
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
    title: 'Pickup Sports Android App',
    cardImg: pickup1,
    galleryImgs: [
      pickup2,
      pickup3,
      pickup4
    ],
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
  },
  {
    title: 'Portfolio Website',
    cardImg: portfolio2,
    galleryImgs: [
      portfolio2,
    ],
    imgDesc: 'Patricia Deogracias\'s Portfolio Website',
    desc: 'A responsive portfolio website, built using ReactJS and deployed via AWS Amplify. Makes use of react-router-dom.',
    techImgs: [
      html,
      css,
      javascript,
      react
    ],
    techDesc: [
      'HTML',
      'CSS',
      'JavaScript',
      'React'
    ],
    link: 'https://github.com/pokimochi/patfolio'
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

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "Spring Boot",
  "Docker",
  "Kubernetes",
  "SQL",
  "Jenkins",
  "Git",
  "Express",
];

// Returns the number of resources needed to load
const numContent = () => {
  return projectCards.length + footerLinks.length + 3;
}

export {
  projectCards,
  heroImage,
  aboutImage,
  footerLinks,
  numContent,
  skills
}