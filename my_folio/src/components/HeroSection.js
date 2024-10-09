import React from 'react';
import HeroImg from '../assets/my_images/hero.png';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero__img">
        <img src={HeroImg} alt="hero" />
      </div>
      <div className="hero__social">
        <div className="hero__social__indicator">
          <p>Socials</p>
        </div>
        <div className="hero__social__links">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </div>
      </div>
    </div>
  );
}
