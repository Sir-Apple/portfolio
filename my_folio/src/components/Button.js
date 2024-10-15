import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

const ButtonStyles = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-3)'};
    padding: 0.7rem 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-3);
    color: ${(props) => (props.outline ? 'white' : 'black')};
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({ btnText, outline = false, onClick = null }) {
  return (
    <ButtonStyles outline={outline}>
      <Link className="button" onClick={onClick}>
        {btnText}
      </Link>
    </ButtonStyles>
  );
}
