import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

const ColStyles = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 2.2rem;
  }
`;

export default function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'Links',
      title: 'LinkedIn',
    },
    {
      type: 'Links',
      title: 'itch.io',
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
