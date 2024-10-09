import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-with: 500px;
  margin: 0 10rem 0;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default function PText() {
  return (
    <PStyle>
      {/* <h1>TuanAnh Tran Portfolio</h1> */}
      <p>
        Welcome to my portfolio, my name is TuanAnh (or can just call me Anh or
        Andrew). I am a passionate software developer with hands-on experience
        and deep expertise in software, website and game development, driven by
        a love for building and creating innovative solutions. I am committed to
        leveraging my skills in application development while continually
        refining my craft to deliver efficient, reliable, and secure software
        solutions.
      </p>
    </PStyle>
  );
}
