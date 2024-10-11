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
  margin: 25rem 40rem 0;
  @media only screen and (max-width: 1080px) {
    margin: 8rem 5rem 0;
  }
`;

const HeroImgStyles = styled.div`
  justify-content: center;
  align-items: center;
  width: 38rem;
  margin: 0 auto;
  img {
    border-radius: 10px;
  }
`;

export default function Home() {
  return (
    <div>
      <InfoStyle>
        <HeroImgStyles>
          <img src={HeroImg2} alt="hero" />
        </HeroImgStyles>
        <PText />
        <Button btnLink="/projects" btnText="See my works" />
      </InfoStyle>
    </div>
  );
}
