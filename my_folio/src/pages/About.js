import React from 'react';
import styled, { keyframes } from 'styled-components';
import ExperiencesSection from '../components/ExperiencesSection';
import Footer from '../components/Footer';
import AboutInfoItem from '../components/AboutInfoItem';

// SVG Images
import CSharpIcon from '../assets/my_images/c-sharp.svg';
import JavaScriptIcon from '../assets/my_images/javascript.svg';
import TypeScriptIcon from '../assets/my_images/typescript.svg';
import HTMLIcon from '../assets/my_images/html.svg';
import CSSIcon from '../assets/my_images/css.svg';
import CPlusPlusIcon from '../assets/my_images/cplusplus.svg';
import PHPIcon from '../assets/my_images/php.svg';
import PythonIcon from '../assets/my_images/python.svg';
import JavaIcon from '../assets/my_images/java.svg';
import MySQLIcon from '../assets/my_images/mysql.svg';
import MongoDBIcon from '../assets/my_images/mongodb.svg';
import MicrosoftSQLIcon from '../assets/my_images/microsoft-sql-server.svg';
import PostgreSQLIcon from '../assets/my_images/postgresql.svg';
// import SQLiteIcon from '../assets/my_images/sqlite.svg';
import ReactIcon from '../assets/my_images/react.svg';
import TailwindCSSIcon from '../assets/my_images/tailwind-css.svg';
import NodeJSIcon from '../assets/my_images/nodejs.svg';
import ASPNetIcon from '../assets/my_images/aspnet.svg';
import XamarinIcon from '../assets/my_images/xamarin.svg';
import NextJSIcon from '../assets/my_images/nextjs.svg';
import UnityIcon from '../assets/my_images/unity.svg';
import UnrealEngineIcon from '../assets/my_images/unreal-engine.svg';
import WordPressIcon from '../assets/my_images/wordpress.svg';

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
          Environments
        </h2>
        <h1>Skills</h1>
        <AboutInfoItem
          title="Languages and Programming Languages"
          items={[
            <img src={CSharpIcon} alt="C#" />,
            <img src={JavaScriptIcon} alt="JavaScript" />,
            <img src={TypeScriptIcon} alt="TypeScript" />,
            <img src={HTMLIcon} alt="HTML" />,
            <img src={CSSIcon} alt="CSS" />,
            <img src={CPlusPlusIcon} alt="CPlusCplus" />,
            <img src={PHPIcon} alt="PHP" />,
            <img src={PythonIcon} alt="Python" />,
            <img src={JavaIcon} alt="Java" />,
          ]}
        />
        <AboutInfoItem
          title="Database Management Systems / Document"
          items={[
            <img src={MySQLIcon} alt="MySQL" />,
            <img src={MongoDBIcon} alt="MongoDB" />,
            <img src={MicrosoftSQLIcon} alt="MicrosoftSQL" />,
            <img src={PostgreSQLIcon} alt="PostgreSQL" />,
          ]}
        />
        <AboutInfoItem
          title="Libraries / Frameworks and Tools"
          items={[
            <img src={ReactIcon} alt="React" />,
            <img src={TailwindCSSIcon} alt="TailwindCSS" />,
            <img src={NodeJSIcon} alt="NodeJS" />,
            <img src={ASPNetIcon} alt="ASPNet" />,
            <img src={XamarinIcon} alt="Xamarin" />,
            <img src={NextJSIcon} alt="NextJS" />,
            <img src={UnityIcon} alt="Unity" />,
            <img src={UnrealEngineIcon} alt="Unreal Engine" />,
            <img src={WordPressIcon} alt="Wordpress" />,
          ]}
        />
      </InfoStyle>
      <Footer />
    </>
  );
}
