import expo1 from './images/projects/expo2019/expo1.png';
import ginhawa1 from './images/projects/ginhawa/ginhawa1.png';
import presentation1 from './images/projects/introWebsites/presentation1.png';
import html from './images/technologies/html-5.svg';
import css from './images/technologies/css-3.svg';
import javascript from './images/technologies/javascript.svg';
import heroku from './images/technologies/heroku.svg';
import raspberryPi from './images/technologies/raspberry-pi.svg';
import react from './images/technologies/react-1.svg';
import socketIO from './images/technologies/socket-io.svg';
import adobeXD from './images/technologies/adobe-xd-1.svg';

import LinkedInIcon from './images/hero/linkedin.svg';
import TwitterIcon from './images/hero/twitter.svg';
import GithubIcon from './images/hero/github.svg';

const projects = [
  {
    title: 'Intro To Websites Workshop',
    cardImg: presentation1,
    imgDesc: 'Intro to Websites Thumbnail',
    desc: 'Taught basic web development to University of South Florida students by walking thorugh how to make a Tic-Tac-Toe web app.',
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
    desc: 'A robot that locates figurines in hard to reach places. Demonstrated the practical uses of Computer Science to students and families at the USF Engineering EXPO Exhibit 2019.',
    techImgs: [
      raspberryPi,
      react,
      heroku,
      socketIO
    ],
    techDesc: [
      'Raspberry Pi',
      'React',
      'Heroku',
      'Socket.io'
    ],
    link: 'https://github.com/Society-of-Competitive-Programmers/Expo2019'
  },
  {
    title: 'Non-Profit Website (WIP)',
    cardImg: ginhawa1,
    imgDesc: 'Ginhawa Thumbnail',
    desc: 'Website for a non-profit organization that offers rehabilitation for abused women, programs on mental-health therapy, and charity work for indigenous Filipino tribes.',
    techImgs: [
      adobeXD,
      react
    ],
    techDesc: [
      'AdobeXD',
      'React'
    ],
    link: 'https://drive.google.com/file/d/1mqf05vxrexvDqYuLNq2NiFq6vTYFWHhx/view?usp=sharing'
  }
]

const links = [
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

export {
  projects,
  links
}