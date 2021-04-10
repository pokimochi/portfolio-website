import React from 'react';
import { skills } from '../../AppContent';
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = (props) => {
  const getProgressBarColor = (progressLevel, currentLevel) => {
    if(!progressLevel || progressLevel < currentLevel) {
      return "white";
    }

    switch(progressLevel) {
      case 2: return "#FFD046"
      case 3: return "#ece313";
      case 4: return "#b3e916";
      default: return "#58dd22";
    }
  }

  return (
    <div id="skills">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <h1 className="content-title" style={{marginBottom: "0"}}>Skills</h1>
      </ScrollAnimation>
      <div className="mdc-layout-grid mdc-layout-grid__inner">
        {
          skills.map((skill) =>
            <div key={skill.category.concat("-container")} className="skill mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone">
              <h4 className="skill-title">{skill.category}</h4>
              {
                skill.skillsDetails.map((skillsDetail) => 
                  <React.Fragment key={`${skillsDetail.name}-container`}>
                    <h6 className="skill-label">{skillsDetail.name}</h6>
                    <div className="progress-bar">
                      <div style={{backgroundColor: getProgressBarColor(skillsDetail.level, 1), borderRadiu: "15px"}} className="progress-bar-level-one"></div>
                      <div style={{backgroundColor: getProgressBarColor(skillsDetail.level, 2)}} className="progress-bar-level-two"></div>
                      <div style={{backgroundColor: getProgressBarColor(skillsDetail.level, 3)}} className="progress-bar-level-three"></div>
                      <div style={{backgroundColor: getProgressBarColor(skillsDetail.level, 4)}} className="progress-bar-level-four"></div>
                      <div style={{backgroundColor: getProgressBarColor(skillsDetail.level, 5), marginRight: 0}} className="progress-bar-level-five"></div>
                    </div>
                  </React.Fragment>
                )
              }
            </div>
          ) 
        }
      </div>
    </div>
  )
};

export default Skills;