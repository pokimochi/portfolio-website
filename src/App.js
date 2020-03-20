import React from 'react';
import { useForm } from 'react-hook-form';

import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";

import { projectCards, socialMediaLinks, avatar, aboutImage } from './AppContent';
import { sendEmail } from './Email.js';

function App() {
  const { handleSubmit, register } = useForm();
  const onClickSend = values => sendEmail(values.name, values.subject, values.message)

  return (
    <div className="app">
      <div id="hero-page">
        <div id="hero-center">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <img id="avatar" alt="Avatar" src={avatar} />
            <h1 id="hero-title"> Matthew Deogracias</h1>
            <h1 id="hero-sub-title">Software Developer</h1>
            {
              socialMediaLinks.map(link => {
                return (
                  <a href={link.url} key={link.alt} target="_blank" rel="noopener noreferrer">
                    <img src={link.icon} alt={link.alt} className="social-media-links" />
                  </a>
                )
              })
            }
          </ScrollAnimation>
        </div>
      </div>
      <div id="app-content">
        <div id="about">
          <div className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0" }}>
            <div className="mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone about-container" style={{paddingRight: "10%"}}>
              <ScrollAnimation animateIn="slideInUp" animateOnce>
                <h1 id="about-title">Hi, I'm Matt</h1>
                <p id="about-description">I'm an undergrad at the University of South Florida majoring in Computer Science and an incoming Junior Software Engineer at JPMorgan Chase. I enjoy exploring different web designs and developing impactful software solutions.</p>
                <br />
                <a href="https://drive.google.com/file/d/1HlJG5tdGSwXcprGDyU1JAYVko1u5jrja/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ display: "inline-block"}}
                >
                  Check Out My Resume!
                </a>
              </ScrollAnimation>
            </div>
            <div className="mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-12-tablet mdc-layout-grid__cell--span-12-phone about-container">
              <ScrollAnimation animateIn="slideInUp" animateOnce>
                <img src={aboutImage} id="about-image" alt="laptop" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div id="projects">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h1 id="projects-title">Projects</h1>
          </ScrollAnimation>
          <div className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0"}} >
            {
              projectCards.map(project => 
                <ScrollAnimation key={project.title} animateIn="slideInUp" className="mdc-layout-grid__cell--span-4 card" animateOnce>
                  <img className="card-image" src={project.cardImg} alt={project.cardDesc} />
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-description">{project.desc}</p>
                  <div className="technology-container">
                    {
                      project.techImgs.map((img, index) =>
                        <img key={project.imgDesc[index]} className="technology-logo" style={index === 0 ? { marginLeft: 0 } : {}} src={img} alt={project.techDesc[index]} />
                      )
                    }
                  </div>
                  <div className="card-button-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="button card-button">View Project</a>
                  </div> 
                </ScrollAnimation>
              )
            }
          </div>
        </div>
        <div id="contacts">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h1 id="contacts-title">Get In Contact!</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInUp" animateOnce style={{width: '50%'}}>
            <form onSubmit={handleSubmit(onClickSend)} id="email-form">
              <input
                id="name-input"
                className="textbox"
                placeholder="Name"
                name="name"
                ref={register({
                  required: 'Required',
                  maxLength: 70
                })}
              />
              <input
                id="subject-input"
                className="textbox"
                placeholder="Subject"
                name="subject"
                ref={register({
                  required: 'Required',
                  maxLength: 70
                })}
              />
              <textarea
                id="message-input"
                className="textbox"
                style={{resize: "none"}}
                placeholder="Message"
                name="message"
                ref={register({
                  required: 'Required',
                  maxLength: 300
                })}
              />
              <button id="send-email-button" className="button" type="submit">Send</button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default App;
