import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: black;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.35rem;
    color: white;
  }
  .projectItem__description {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: var(--gray-1);
    margin-top: 1rem;
  }
  .projectItem__skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .projectItem__company {
    font-size: 1.85rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
  }
  .skill__item {
    font-size: 1.4rem;
    color: white;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 12px;
    display: inline-block;
    white-space: nowrap;
  }

  @media only screen and (max-width: 1080px) {
    .projectItem__img {
      height: 35px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  company = 'Company Name',
  skills = ['Skills'],
  desc = 'Lorem Ipsum dolor is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <p className="projectItem__company">{company}</p>
        <Link to="">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__description">{desc}</p>
        <div className="projectItem__skills">
          {skills.map((skill, index) => (
            <span className="skill__item" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ProjectItemStyles>
  );
}
