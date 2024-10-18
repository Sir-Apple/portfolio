import React from 'react';
import styled from 'styled-components';

const ExperiencesItemStyles = styled.div`
  .experienceItem__info {
    margin-top: 1rem;
    background-color: black;
    padding: 1rem;
    border-radius: 12px;
    width: 100%;
  }
  .experienceItem__title {
    font-size: 2.25rem;
    color: white;
    text-align: center;
  }
  .experienceItem__description {
    font-size: 2rem;
    line-height: 2.2rem;
    color: var(--gray-1);
    margin-top: 1rem;
    text-align: center;
  }
  .experienceItem__company {
    font-size: 2.5rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
  .experienceItem__timestamp,
  .experienceItem__skills {
    font-size: 2rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
  .experienceItem__location {
    font-size: 2.5rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export default function ExperiencesItem({
  company = 'Company Name',
  position = 'Position Title',
  timestamp = 'Timestamp',
  location = 'Location',
  skills = 'Skills',
  descr = ['Description'],
}) {
  const parseText = (text) =>
    text.split(/(<b>.*?<\/b>|<a.*?<\/a>)/).map((part, i) => {
      if (part.startsWith('<b>') && part.endsWith('</b>')) {
        return <strong key={i}>{part.replace(/<\/?b>/g, '')}</strong>;
      }
      if (part.startsWith('<a') && part.endsWith('</a>')) {
        const matchHref = part.match(/href="(.*?)"/);
        const matchText = part.match(/>(.*?)<\/a>/);
        const matchStyle = part.match(/style="(.*?)"/);
        const target = part.includes('target="_blank"') ? '_blank' : '_self';

        return (
          <a
            key={i}
            href={matchHref ? matchHref[1] : '#'}
            target={target}
            rel="noopener noreferrer"
            style={{
              textDecoration: 'underline',
              ...(matchStyle && { color: matchStyle[1] }),
            }}
          >
            <strong>{matchText ? matchText[1] : 'link'}</strong>
          </a>
        );
      }
      return part;
    });

  return (
    <ExperiencesItemStyles>
      <div className="experienceItem__info">
        <p className="experienceItem__timestamp">{timestamp}</p>
        <p className="experienceItem__company">{company}</p>
        <h3 className="experienceItem__title">{position}</h3>
        <p className="experienceItem__location">{location}</p>
        <p className="experienceItem__skills">Skills: {skills}</p>
        <div className="experienceItem__description">
          {descr.map((desc, index) => (
            <div className="experience__item" key={index}>
              {parseText(desc)}
            </div>
          ))}
        </div>
      </div>
    </ExperiencesItemStyles>
  );
}
