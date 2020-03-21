import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import "@material/layout-grid/mdc-layout-grid.scss";
import { projectCards, socialMediaLinks, avatar, aboutImage, footerLinks } from './AppContent';
import { sendEmail } from './Email.js';

function App() {
  const { handleSubmit, errors, register } = useForm();
  const [isBtnClicked, setBtnClicked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isMsgSent, setMsgSent] = useState(false);

  const onClickSend = values => {
    if (isLoading) {
      return;
    }

    setBtnClicked(true);
    setLoading(true);

    sendEmail(values.email, values.name, values.subject, values.message).then((response) => {
      setMsgSent(true);
      setLoading(false);
    }, (err) => {
      setMsgSent(false);
      setLoading(false);
    });
  }

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
                <p id="about-description">I'm an undergrad at the University of South Florida majoring in Computer Science and an incoming Junior Software Engineer at a major fintech company in Tampa. I enjoy trying out different web designs and developing software that creates a positive impact.</p>
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
                <ScrollAnimation key={project.title} animateIn="slideInUp" className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-12-phone card" animateOnce>
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
            <h1 id="contacts-title">Get In Touch!</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInUp" animateOnce style={{width: '90%'}}>
            <form onSubmit={handleSubmit(onClickSend)} id="email-form">
              <input
                id="email-input"
                type="email"
                className="textbox"
                placeholder="E-mail Address"
                name="email"
                ref={register({
                  required: 'Required',
                  maxLength: 70
                })}
              />
              {
                errors.email && errors.email.type === "required" &&
                <p className="error-message">Your input is required</p>
              }
              {
                errors.email && errors.email.type === "maxLength" &&
                <p className="error-message">Your input exceeds the maximum length</p>
              }
              <input
                id="name-input"
                type="text"
                className="textbox"
                placeholder="Name"
                name="name"
                ref={register({
                  required: 'Required',
                  maxLength: 70
                })}
              />
              {
                errors.name && errors.name.type === "required" &&
                <p className="error-message">Your input is required</p>
              }
              {
                errors.name && errors.name.type === "maxLength" &&
                <p className="error-message">Your input exceeds the maximum length</p>
              }
              <input
                id="subject-input"
                type="text"
                className="textbox"
                placeholder="Subject"
                name="subject"
                ref={register({
                  required: 'Required',
                  maxLength: 70
                })}
              />
              {
                errors.subject && errors.subject.type === "required" &&
                <p className="error-message">Your input is required</p>
              }
              {
                errors.subject && errors.subject.type === "maxLength" &&
                <p className="error-message">Your input exceeds the maximum length</p>
              }
              <textarea
                id="message-input"
                type="text"
                className="textbox"
                style={{resize: "none"}}
                placeholder="Message"
                name="message"
                ref={register({
                  required: 'Required',
                  maxLength: 300
                })}
              />
              {
                errors.message &&
                errors.message.type === "required" &&
                <p className="error-message">Your input is required</p>
              }
              {
                errors.message &&
                errors.message.type === "maxLength" &&
                <p className="error-message">Your input exceeds the maximum length</p>
              }
              {
                isLoading ?
                <ReactLoading type="spin" color="#FF6569" height="5em" width="5em"/> :
                <button id="send-email-button" className="button" type="submit">Send</button>
              }
              {
                isBtnClicked &&
                !isLoading &&
                !isMsgSent &&
                <p className="error-message">Something went wrong, please try again later...</p>
              }
              {
                isBtnClicked &&
                !isLoading &&
                isMsgSent &&
                <p className="success-message">Message sent!</p>
              }
            </form>
          </ScrollAnimation>
        </div>
      </div>
      <div id="footer">
          <p>Matthew Deogracias</p>
          {
              footerLinks.map(link => {
                return (
                  <a href={link.url} key={link.alt} target="_blank" rel="noopener noreferrer">
                    <img src={link.icon} alt={link.alt} className="footer-icons" />
                  </a>
                )
              })
            }
        </div>
    </div>
  );
}

export default App;
