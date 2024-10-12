import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ExperiencesItemStyles = styled.div`
  .experienceItem__info {
    margin-top: 1rem;
    background-color: black;
    padding: 1rem;
    border-radius: 12px;
  }
  .experienceItem__title {
    font-size: 2.25rem;
    color: white;
  }
  .experienceItem__description {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: var(--gray-1);
    margin-top: 1rem;
  }
  .experienceItem__company {
    font-size: 1.95rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
  }
  .experienceItem__timestamp {
    font-size: 1.85rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
  }
`;

export default function ExperiencesItem({
  company = 'Company Name',
  position = 'Position Title',
  timestamp = 'Timestamp',
  desc = 'Description',
}) {
  return (
    <ExperiencesItemStyles>
      <div className="experienceItem__info">
        <p className="experienceItem__timestamp">{timestamp}</p>
        <p className="experienceItem__company">{company}</p>
        <h3 className="experienceItem__title">{position}</h3>
        <p className="experienceItem__description">{desc}</p>
      </div>
    </ExperiencesItemStyles>
  );
}
