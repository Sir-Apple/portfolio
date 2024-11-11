import React from 'react';
import styled from 'styled-components';

const AboutItemStyles = styled.div`
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  border: 1px solid white;
  border-radius: 8px;
  .title {
    font-size: 2rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: -30px auto 1rem 2rem;
  }
  .item {
    padding: 5px;
    border-radius: 8px;
    font-size: 2rem;
    width: 5.2rem;
  }
  @media only screen and (max-width: 992px) {
    .items {
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      font-size: 1.8rem;
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
