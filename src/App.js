import React, { useState, useEffect } from 'react';
import './App.css';
import { projectCards, socialMediaLinks, avatar, aboutImage, footerLinks, numContent, skills } from './AppContent';

import "@material/layout-grid/mdc-layout-grid.scss";

import { css } from "@emotion/core";

import { useForm } from 'react-hook-form';

import RotateLoader from "react-spinners/RotateLoader";
import MoonLoader from "react-spinners/MoonLoader";

import ScrollAnimation from 'react-animate-on-scroll';

import { sendEmail } from './Email.js';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function App() {
  const { handleSubmit, errors, register } = useForm();

  // Contact Me states
  const [isBtnClicked, setBtnClicked] = useState(false);
  const [isSending, setSending] = useState(false);
  const [isMsgSent, setMsgSent] = useState(false);

  // Resource loading states
  const [numResources, setNumResources] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [numLoaded, setNumLoaded] = useState(0);

  // Lightbox states
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const override = css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    top: 45%;
  `;

  // Send E-mail
  const onClickSend = values => {
    if (isSending) {
      return;
    }

    setBtnClicked(true);
    setSending(true);

    sendEmail(values.email, values.name, values.subject, values.message).then((response) => {
      setMsgSent(true);
      setSending(false);
    }, (err) => {
      setMsgSent(false);
      setSending(false);
    });
  }

  // Set number of resources loaded
  useEffect(() => {
    setNumResources(numContent());
  },
    []
  );

  // Check if all resources are loaded
  const handleResourceLoad = () => {
    setNumLoaded(numLoaded + 1);

    if (numResources === numLoaded) {
      setLoaded(true);
    }
  }

  // Gallery
  const getCardGalleryImg = (galleryIndex, photoIndex) => projectCards[galleryIndex].galleryImgs[photoIndex];
  const getCardGalleryLength = (galleryIndex) => projectCards[galleryIndex].galleryImgs.length;
  const nextSrc = (galleryIndex, photoIndex) => getCardGalleryImg(galleryIndex, (photoIndex + 1) % getCardGalleryLength(galleryIndex));
  const prevSrc = (galleryIndex, photoIndex) => getCardGalleryImg(galleryIndex, (photoIndex + getCardGalleryLength(galleryIndex) - 1) % getCardGalleryLength(galleryIndex));

  return (
    <div className="app">
      <div id="loading-screen" style={{ display: !isLoaded ? "block" : "none" }}>
        <RotateLoader
          size={30}
          margin={35}
          color="#FF6569"
          loading={!isLoaded}
          css={override}
        />
      </div>
      <div style={{ display: isLoaded ? "block" : "none" }}>
        <ScrollAnimation
              animateIn="fadeInUp"
              offset={0}
              animateOnce
            >
          <div class="topnav">
            <a href="#home">LinkedIn</a>
            <a href="#news">Github</a>
            <a href="#contact">Twitter</a>
            <div className="nav-right">
              <a href="#">Skills</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div> 
          </div>ˇ
        </ScrollAnimation>
        <div id="hero-page" className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0" }}>
          <div id="hero-left" className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-12-phone">
            <ScrollAnimation
              animateIn="fadeInUp"
              offset={0}
              animateOnce
            >
              <h1 id="hero-title">
                Hello World!
            </h1>
              <h1 className="hero-sub-title">
                Matthew Deogracias
              </h1>
              <h1 className="hero-sub-title">
                Full Stack Software Developer
              </h1>
              {/* {
                socialMediaLinks.map(link => {
                  return (
                    <a
                      href={link.url}
                      key={link.alt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        onLoad={handleResourceLoad}
                        src={link.icon}
                        alt={link.alt}
                        className="social-media-links"
                      />
                    </a>
                  )
                })
              } */}
            </ScrollAnimation>
          </div>
          <div id="hero-right" className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-12-phone">
            <ScrollAnimation
              animateIn="fadeInUp"
              offset={0}
              animateOnce
            >
              <img onLoad={handleResourceLoad} className="hero-image" alt="Avatar" src={avatar} />
            </ScrollAnimation>
          </div>
        </div>
        <div id="app-content">
          <div id="skills">
            <ScrollAnimation animateIn="fadeInUp" offset={0} animateOnce>
              <h1 className="content-title">&lt;Skills/&gt;</h1>
            </ScrollAnimation>
            <div className="mdc-layout-grid mdc-layout-grid__inner">
              {
                skills.map(skill => 
                  <span className="skill mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-12-phone">{skill}</span>
                )
              }
            </div>
          </div>
          <div id="projects">
            <ScrollAnimation animateIn="fadeInUp" offset={0} animateOnce>
              <h1 className="content-title">&lt;Projects/&gt;</h1>
            </ScrollAnimation>
            <div className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0" }} >
              {
                projectCards.map((project, index) =>
                  <ScrollAnimation
                    className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-12-phone card"
                    key={project.title}
                    animateIn="slideInUp"
                    offset={0}
                    animateOnce
                  >
                    <div className="card-image-container">
                      <img
                        className="card-image"
                        src={project.cardImg}
                        alt={project.cardDesc}
                        onLoad={handleResourceLoad}
                      />
                      <div
                        className="card-image-overlay"
                        onClick={() => {
                          setGalleryOpen(true);
                          setGalleryIndex(index);
                          setPhotoIndex(0);
                        }}
                      >
                        <button className="card-image-overlay-text">
                          Open Gallery
                        </button>
                      </div>
                    </div>

                    <h2 className="card-title">{project.title}</h2>
                    <p className="card-description">{project.desc}</p>
                    <div className="technology-container">
                      {
                        project.techImgs.map((img, index) =>
                          <img
                            className="technology-logo"
                            onLoad={handleResourceLoad}
                            key={project.imgDesc[index]}
                            style={index === 0 ? { marginLeft: 0 } : {}}
                            src={img}
                            alt={project.techDesc[index]}
                          />
                        )
                      }
                    </div>
                    <div className="card-button-container">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button card-button"
                      >
                        View Source Code
                      </a>
                    </div>
                  </ScrollAnimation>
                )
              }
            </div>
            {isGalleryOpen && (
              <Lightbox
                mainSrc={getCardGalleryImg(galleryIndex, photoIndex)}
                nextSrc={nextSrc(galleryIndex, photoIndex)}
                prevSrc={prevSrc(galleryIndex, photoIndex)}
                onCloseRequest={() => setGalleryOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + getCardGalleryLength(galleryIndex) - 1) % getCardGalleryLength(galleryIndex))}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % getCardGalleryLength(galleryIndex))}
              />
            )}
          </div>
          <div id="contacts">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <h1 id="contacts-title" className="content-title">&lt;Contact/&gt;</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInUp" animateOnce style={{ width: '90%' }}>
              <form onSubmit={handleSubmit(onClickSend)} id="email-form">
                <input
                  id="email-input"
                  type="email"
                  className="textbox"
                  placeholder="E-mail Address"
                  name="email"
                  ref={register({
                    required: 'Required',
                    maxLength: 255
                  })}
                />
                {
                  errors.email && errors.email.type === "required" &&
                  <p className="error-message">Please enter your E-mail address</p>
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
                  <p className="error-message">Please enter your name</p>
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
                    maxLength: 80
                  })}
                />
                {
                  errors.subject && errors.subject.type === "required" &&
                  <p className="error-message">Please enter the subject of your message</p>
                }
                {
                  errors.subject && errors.subject.type === "maxLength" &&
                  <p className="error-message">Your input exceeds the maximum length</p>
                }
                <textarea
                  id="message-input"
                  type="text"
                  className="textbox"
                  style={{ resize: "none" }}
                  placeholder="Message"
                  name="message"
                  ref={register({
                    required: 'Required',
                    maxLength: 500
                  })}
                />
                {
                  errors.message &&
                  errors.message.type === "required" &&
                  <p className="error-message">Please enter your message</p>
                }
                {
                  errors.message &&
                  errors.message.type === "maxLength" &&
                  <p className="error-message">Your input exceeds the maximum length</p>
                }
                {
                  isSending ?
                    <MoonLoader size={50} loading={isSending} color={"#FF6569"} /> :
                    <button id="send-email-button" className="button" type="submit">Send</button>
                }
                {
                  isBtnClicked &&
                  !isSending &&
                  !isMsgSent &&
                  <p className="error-message">Something went wrong, please try again later...</p>
                }
                {
                  isBtnClicked &&
                  !isSending &&
                  isMsgSent &&
                  <p className="success-message">Message sent!</p>
                }
              </form>
            </ScrollAnimation>
          </div>
        </div>
        <div id="footer">
          <p>
            Made by Matthew Deogracias
            <br />
            <a id="attribution" href="https://www.freepik.com/vectors/technology">Technology vector created by stories - www.freepik.com</a>
          </p>
          {
            footerLinks.map(link => {
              return (
                <a href={link.url} key={link.alt} target="_blank" rel="noopener noreferrer">
                  <img onLoad={handleResourceLoad} src={link.icon} alt={link.alt} className="footer-icons" />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
