import React from 'react';
import styled from 'styled-components';

const AboutItemStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  border: 1px solid white;
  border-radius: 8px;
  .title {
    font-size: 2.4rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 0 auto 3rem 2rem;
  }
  .item {
    background-color: black;
    padding: 5px;
    border: 1px solid white;
    border-radius: 8px;
    font-size: 2rem;
  }
  @media only screen and (max-width: 992px) {
    .items {
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'This is title',
  items = ['HTML'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
