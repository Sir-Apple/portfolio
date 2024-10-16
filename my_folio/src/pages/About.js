import React from 'react';
import styled, { keyframes } from 'styled-components';
import ExperiencesSection from '../components/ExperiencesSection';
import Footer from '../components/Footer';
import AboutInfoItem from '../components/AboutInfoItem';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const InfoStyle = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 10rem;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease forwards;

  h1 {
    margin-bottom: 6rem;
    justify-content: center;
    align-items: center;
    line-height: 4rem;
    color: white;
  }
  h2 {
    margin-bottom: 6rem;
    line-height: 3rem;
  }
  h3 {
    margin-bottom: 3rem;
    line-height: 3rem;
  }

  @media only screen and (max-width: 1080px) {
    margin: 8rem 5rem 0;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2.1rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <InfoStyle>
        <h1>Experiences</h1>
        <ExperiencesSection />
        <h1>Education</h1>
        <h3>Queensland University of Technology</h3>
        <h2>
          Bachelor of Information Technology & Games and Interactive
          Environments (2022)
        </h2>
        <h1>Skills</h1>
        <AboutInfoItem
          title="Languages and Programming Languages"
          items={[
            'C#',
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS',
            'C++',
            'PHP',
            'Python',
            'Java',
          ]}
        />
        <AboutInfoItem
          title="Database Management Systems / Document"
          items={[
            'MySQL',
            'MongoDB',
            'Microsoft SQL Server',
            'PostgreSQL',
            'NoSQL',
            'SQLite',
          ]}
        />
        <AboutInfoItem
          title="Libraries and Tools"
          items={[
            'ReactJS',
            'TailwindCSS',
            'NodeJS',
            'ASP.NET Core',
            'Xamarin',
            'NextJS',
            'Unity',
            'Unreal Engine',
            'WordPress',
          ]}
        />
      </InfoStyle>
      <Footer />
    </>
  );
}
