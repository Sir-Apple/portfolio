import React from 'react';
import { FaLinkedin, FaItchIo, FaGithub, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import HeroImg from '../assets/my_images/hero-2.png';

const HeroSectionStyles = styled.div`
  display: block;
  width: 100%;
  margin: 10rem auto;
  .hero__info {
    display: block;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin: 0 auto;
  }
`;

const HeroImgStyles = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 15rem;
  border: 1px solid white;
  border-radius: 5px;
`;

const HeroSocialIndicatorStyles = styled.div`
  font-size: 2.5rem;
  color: white;
`;

const HeroSocialStyles = styled.div`
  display: flex;
  width: 10rem;
`;

export default function HeroSection() {
  return (
    <HeroSectionStyles>
      <HeroImgStyles>
        <img src={HeroImg} alt="hero" />
      </HeroImgStyles>
      <div className="hero__info">
        {/* <div className="hero__social__indicator">
        </div> */}
        <HeroSocialIndicatorStyles>Name</HeroSocialIndicatorStyles>
        <p>TuanAnh Tran</p>
        <HeroSocialIndicatorStyles>Role</HeroSocialIndicatorStyles>
        <p>Software Developer</p>
        <p>Game Developer</p>
        <p>Full Stack Developer</p>
        <HeroSocialIndicatorStyles>Socials</HeroSocialIndicatorStyles>
        <HeroSocialStyles>
          <FaLinkedin />
          <FaItchIo />
          <FaGithub />
          <FaYoutube />
        </HeroSocialStyles>
      </div>
    </HeroSectionStyles>
  );
}
