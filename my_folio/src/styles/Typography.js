import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import Iceland from '../assets/fonts/Iceland-Regular.ttf';
import BigShouldersDisplayMedium from '../assets/fonts/BigShouldersDisplay-Medium.ttf';
import BigShouldersDisplayRegular from '../assets/fonts/BigShouldersDisplay-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Iceland Regular';
    src: url(${Iceland});
    font-style: normal;
  }
  @font-face {
    font-family: 'BigShouldersDisplay Regular';
    src: url(${BigShouldersDisplayRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'BigShouldersDisplay Medium';
    src: url(${BigShouldersDisplayMedium});
    font-style: normal;
  }
  html{
    font-family: 'Iceland Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Iceland Regular';
    color: var(--gray-3);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Typography;
