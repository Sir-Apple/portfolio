import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    cursor: pointer;
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
    font-size: 2.1rem;
    color: white;
  }
  .projectItem__description {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: var(--gray-1);
    margin-top: 1rem;
  }
  .projectItem__skills,
  .projectItem__type {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .projectItem__company {
    font-size: 1.75rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
  }

  .type__item {
    font-size: 1.6rem;
    color: var(--gray-1);
    display: inline-block;
    white-space: nowrap;
  }
  .skill__item {
    font-size: 1.25rem;
    color: white;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 15px;
    display: inline-block;
    white-space: nowrap;
  }

  @media only screen and (max-width: 1080px) {
    .projectItem__img {
      height: 290px;
    }
  }
`;

export default function CommercialProjectItem({
  img = projectImg,
  title = 'Project Name',
  company = 'Company Name',
  types = ['Project Type'],
  skills = ['Skills'],
  onClick,
}) {
  return (
    <ProjectItemStyles>
      <div
        className="projectItem__img"
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        }}
      >
        <img src={img} alt="project img" />
      </div>
      <div className="projectItem__info">
        <p className="projectItem__company">{company}</p>
        <h3 className="projectItem__title">{title}</h3>
        <div className="projectItem__type">
          {types.map((type, index) => (
            <span className="type__item" key={index}>
              {type}
            </span>
          ))}
        </div>
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
