import React from 'react';
import { skills } from '../../AppContent';
import ScrollAnimation from 'react-animate-on-scroll';


const Skills = (props) => {
  return (
    <div id="skills">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <h1 className="content-title">&lt;Skills/&gt;</h1>
      </ScrollAnimation>
      <ScrollAnimation className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0" }} animateIn="fadeInUp" animateOnce>
        {
          skills.map(skill =>
            <span key={"skill-label-" + skill}
              className="skill mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-12-phone">
              {skill}
            </span>
          )
        }
      </ScrollAnimation>
    </div>
  )
};

export default Skills;