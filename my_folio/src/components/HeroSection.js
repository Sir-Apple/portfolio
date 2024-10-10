import React from 'react';
import { FaLinkedin, FaItchIo, FaGithub, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import HeroImg from '../assets/my_images/hero-2.png';

const HeroSectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 5rem;
  position: fixed;
  background: var(--gray-deep-dark);

  .hero__info {
    text-align: center;
    font-size: 2rem;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1080px) {
    position: relative;
    left: 25%;
    width: 50%;
  }
`;

const HeroImgStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  width: 10rem;
  margin: 0 auto;
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
