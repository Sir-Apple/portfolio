import React from 'react';
import HeroImg from '../assets/my_images/hero.png';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero__img">
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
}
