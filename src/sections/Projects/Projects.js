import React, { useState } from 'react';
import { projectCards } from '../../AppContent';
import Lightbox from 'react-image-lightbox';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = (props) => {
  // Lightbox states
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  // Gallery
  const getCardGalleryImg = (galleryIndex, photoIndex) => projectCards[galleryIndex].galleryImgs[photoIndex];
  const getCardGalleryLength = (galleryIndex) => projectCards[galleryIndex].galleryImgs.length;
  const nextSrc = (galleryIndex, photoIndex) => getCardGalleryImg(galleryIndex, (photoIndex + 1) % getCardGalleryLength(galleryIndex));
  const prevSrc = (galleryIndex, photoIndex) => getCardGalleryImg(galleryIndex, (photoIndex + getCardGalleryLength(galleryIndex) - 1) % getCardGalleryLength(galleryIndex));

  return (
    <div id="projects">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <h1 className="content-title">&lt;Projects/&gt;</h1>
      </ScrollAnimation>
      <div className="mdc-layout-grid mdc-layout-grid__inner" style={{ padding: "0" }} >
        {
          projectCards.map((project, index) =>
            <ScrollAnimation
              className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-12-phone card"
              key={project.title}
              animateIn="slideInUp"
              animateOnce
            >
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={project.cardImg}
                  alt={project.cardDesc}
                  onLoad={props.handleResourceLoad}
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
                      onLoad={props.handleResourceLoad}
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
  )
};

export default Projects;