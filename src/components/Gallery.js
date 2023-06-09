import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'

import nudmLP from '../assets/images/nudm-lp.png';
import pic2 from '../assets/images/Album2.jpeg';
import pic3 from '../assets/images/Album3.jpeg';
import pic4 from '../assets/images/Album4.jpeg';
import pic5 from '../assets/images/Album5.jpeg';
import pic6 from '../assets/images/Album6.jpeg';
import pic7 from '../assets/images/Album7.jpeg';
import './GalleryStyles.css'

const Gallery = () => {
    const [rotation, setRotation] = useState(0);
    const carouselCardsRef = useRef(null);
    /*  
    const handleWheel = (event) => {
      const delta = -Math.sign(event.deltaY);
      const maxRotation = 360;
      const minRotation = 51.4;
      const cardWidth = 51.4;
      const newRotation = rotation + delta * cardWidth;
    
      if (newRotation > maxRotation) {
        setRotation(maxRotation);
      } else if (newRotation < minRotation) {
        setRotation(minRotation);
      } else {
        setRotation(newRotation);
      }
    }; 
    */

    const handlePrev = () => {
      const maxRotation = 360;
      const minRotation = -360;
      const cardWidth = 51.4;
      const newRotation = rotation + cardWidth;
      if (newRotation > maxRotation) {
        setRotation(maxRotation);
      } else if (newRotation < minRotation) {
        setRotation(minRotation);
      } else {
        setRotation(newRotation);
      }
    };
        
    const handleNext = () => {
      const maxRotation = 360;
      const minRotation = -360;
      const cardWidth = 51.4;
      const newRotation = rotation - cardWidth;
      if (newRotation > maxRotation) {
        setRotation(maxRotation);
      } else if (newRotation < minRotation) {
        setRotation(minRotation);
      } else {
        setRotation(newRotation);
      }
    };
    
  return (
    <div className="carousel">
        <div
            ref={carouselCardsRef}
            className="carousel__cards"
            style={{ transform: `translateZ(-25rem) rotateY(${rotation}deg)` }}>
            {/*onWheel={handleWheel}> */}
              <div className="carousel__card">
                  <p className="carousel__text">DANCE MARATHON</p>
                  <Link to='/Project1'><img className="carousel__img" src={nudmLP} alt="" /></Link>
              </div>
              <div className="carousel__card">
                  <p className="carousel__text">INFORMATION TECHNOLOGY</p>
                  <Link to='/Project2'><img className="carousel__img" src={pic2} alt="" /></Link>
              </div>
              <div className="carousel__card">
                  <p className="carousel__text">GIRLS WHO CODE</p>
                  <Link to='/Project3'><img className="carousel__img" src={pic3} alt="" /></Link>
              </div>
              <div className="carousel__card">
                  <p className="carousel__text">ALZHEIMER'S ML</p>
                  <img className="carousel__img" src={pic4} alt="" />
              </div>
              <div className="carousel__card">
                  <p className="carousel__text">BLAH 1</p>
                  <img className="carousel__img" src={pic5} alt="" />
              </div>
              <div className="carousel__card">
                  <p className="carousel__text">BLAH 2</p>
                  <img className="carousel__img" src={pic6} alt="" />
              </div>
              <div className="carousel__card">
                  <p className="carousel__text">BLAH 3</p>
                  <img className="carousel__img" src={pic7} alt="" />
              </div>
        </div>
        <div className="carousel__arrows">
      <button onClick={handlePrev} className="carousel__arrow carousel__arrow--prev">
        &lt;
      </button>
      <button onClick={handleNext} className="carousel__arrow carousel__arrow--next">
        &gt;
      </button>
    </div>
    </div>
  )
}
export default Gallery
