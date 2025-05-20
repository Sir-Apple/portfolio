import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaItchIo, FaGithub, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import HeroImg from '../assets/my_images/hero-2.png';
import HeroImg2 from '../assets/my_images/Avatar.png';

const words = ['Software', 'FullStack', 'Games'];

function scrambleWord(word) {
  const chars = word.split('');
  for (let i = chars.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

const HeroSectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: var(--gray-deep-dark);
  width: 30rem;
  z-index: 99;
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
  height: 15rem;
  border: 1px solid white;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${(props) =>
      props.glitch ? 'glitchAnim 0.4s ease-in-out' : 'none'};
  }

  @keyframes glitchAnim {
    0% {
      transform: translate(0);
      opacity: 1;
    }
    20% {
      transform: translate(-2px, 2px);
      opacity: 0.8;
    }
    40% {
      transform: translate(2px, -2px);
      opacity: 0.6;
    }
    60% {
      transform: translate(-1px, 1px);
      opacity: 0.8;
    }
    80% {
      transform: translate(1px, -1px);
      opacity: 1;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
`;

const HeroDetailsStyles = styled.div`
  font-size: 2.2rem;
  color: white;
`;

const HeroSocialStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 12.5rem;
  margin: 0 auto;
  a {
    color: white;
    font-size: 2.5rem;
    margin: 0 0.5rem;
    transition: 0.3s ease;
    &:hover {
      color: var(--gray-2);
    }
  }
`;

export default function HeroSection() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showAltImage, setShowAltImage] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);

      const scrambleInterval = setInterval(() => {
        setDisplayWord(scrambleWord(words[nextIndex]));
      }, 100);

      setTimeout(() => {
        clearInterval(scrambleInterval);
        setDisplayWord(words[nextIndex]);
      }, 1500);
    }, 2500);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      setTimeout(() => {
        setShowAltImage((prev) => !prev);
        setIsGlitching(false);
      }, 400);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSectionStyles>
      <HeroImgStyles glitch={isGlitching}>
        <img src={showAltImage ? HeroImg2 : HeroImg} alt="hero" />
      </HeroImgStyles>

      <div className="hero__info">
        <p>Name</p>
        <HeroDetailsStyles>TuanAnh Tran</HeroDetailsStyles>
        <p>Role</p>
        <HeroDetailsStyles>{displayWord} Developer</HeroDetailsStyles>
        <p>Socials</p>
        <HeroSocialStyles>
          <a
            href="https://www.linkedin.com/in/anhh-trann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://sadapple.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaItchIo />
          </a>
          <a
            href="https://github.com/Sir-Apple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@tuananhtran2944"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </HeroSocialStyles>
      </div>
    </HeroSectionStyles>
  );
}
