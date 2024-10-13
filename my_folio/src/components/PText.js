import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  line-height: 2.2rem;
  @media only screen and (max-width: 1080px) {
    font-size: 2.2rem;
    margin: 0 auto;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle>
      <p>{children}</p>
    </PStyle>
  );
}
