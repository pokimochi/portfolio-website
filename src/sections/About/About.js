import React from 'react';
import { skills } from '../../AppContent';
import ScrollAnimation from 'react-animate-on-scroll';
import avatar from './../../images/about/headshot-2.png';

const Skills = (props) => {
  return (
    <div id="about">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <h1 className="content-title" style={{marginBottom: "0"}}>About Me</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="slideInUp" animateOnce className="mdc-layout-grid mdc-layout-grid__inner" style={{padding: 0, marginTop: '2.5vh'}}>
        <div id="about-skills"className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone">
          {
            skills.map((skill) =>
              <div key={skill.category.concat("-container")} className="about-skill-container">
                <h4 className="about-skill-title">{skill.category}</h4>
                {
                  skill.skillsDetails.map((skillsDetail) => 
                    <React.Fragment key={`${skillsDetail.name}-container`}>
                      <span className="about-skill-label">{skillsDetail.name}</span>
                    </React.Fragment>
                  )
                }
              </div>
            ) 
          }
        </div>
        <div
          className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone"
          id="about-profile"
        >
          <img src={avatar} alt="Matthew Deogracias Profile" id="about-profile-avatar" />
          <h4 id="about-profile-header">Hi, I'm Matt</h4>
          <p id="about-profile-description">
            I currently work as a <b>Software Engineer at Uber</b>. As a first generation Filipino immigrant, I love working in tech because of its ability to enable positive change.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  )
};

export default Skills;