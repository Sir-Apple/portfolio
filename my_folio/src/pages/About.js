import React from 'react';
import styled from 'styled-components';
import ExperiencesSection from '../components/ExperiencesSection';

const InfoStyle = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 1rem;
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

export default function About() {
  return (
    <>
      <InfoStyle>
        <h1>Experiences</h1>
        <ExperiencesSection />
      </InfoStyle>
    </>
  );
}
