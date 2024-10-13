import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import HeroImg2 from '../assets/my_images/hero-home.png';

const InfoStyle = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  h1 {
    margin-bottom 6rem;
    justify-content: center;
    align-items: center;
    line-height: 4rem;
  }
  @media only screen and (max-width: 1080px) {
    margin: 8rem 5rem 0;
  }
  @media only screen and (max-width: 768px){
   h1 {
    font-size: 2.8rem;
    }
  }
`;

const HeroImgStyles = styled.div`
  justify-content: center;
  align-items: center;
  width: 38rem;
  margin: 0 auto;
  img {
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 28rem;
    }
  }
`;

export default function Home() {
  return (
    <InfoStyle>
      <h1>TuanAnh Tran Portfolio</h1>
      <HeroImgStyles>
        <img src={HeroImg2} alt="hero" />
      </HeroImgStyles>
      <PText>
        Welcome to my portfolio! <br /> My name is TuanAnh (or can just call me
        Andrew). I am a passionate software developer with hands-on experience
        and deep expertise in software, website and game development, driven by
        a love for building and creating innovative solutions. I am committed to
        leveraging my skills in application development while continually
        refining my craft to deliver efficient, reliable, and secure software
        solutions.
      </PText>
    </InfoStyle>
  );
}
