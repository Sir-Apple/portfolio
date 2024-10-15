import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 5rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.8rem;
    color: white;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-dark);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 1080px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">TuanAnh Tran</h1>
          <PText>
            Software Developer | FullStack Developer | Games Developer
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Email"
            links={[
              {
                title: 'tranquangtuananh2801@gmail.com',
                path: 'mailto:tranquangtuananh2801@gmail.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>&copy; 2024 TuanAnh Tran</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
