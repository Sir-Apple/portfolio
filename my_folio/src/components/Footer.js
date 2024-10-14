import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3 {
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
            heading="Social Media"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/anhh-trann/',
                type: 'Link',
              },
              {
                title: 'itch.io',
                type: 'Link',
              },
              {
                title: 'GitHub',
                type: 'Link',
              },
              {
                title: 'YouTube',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
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
          <PText>&copy; 2023 TuanAnh Tran. All rights reserved.</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
