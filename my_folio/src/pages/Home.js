import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';

const InfoStyle = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 30rem 40rem 0;
  @media only screen and (max-width: 1080px) {
    margin: 10rem 5rem 0;
  }
`;
export default function Home() {
  return (
    <div>
      <InfoStyle>
        <PText />
        <Button btnLink="/projects" btnText="See my works" />
      </InfoStyle>
    </div>
  );
}
