import { v4 as uuidv4 } from 'uuid';
import MovieAppImage from '../my_images/movieapp.PNG';
import OldPortfolioImg from '../my_images/oldportfolio.PNG';
import TheHaunted from '../my_images/thehauntedbg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Movie Trackr',
    type: ['Web'],
    skills: ['ReactJS', 'CSS', 'JavaScript'],
    desc:
      'This Movie Trackr App is made with ReactJS with the purpose of searching for movies and their details fetched from TMDB. The user will be able to search for the movie they like then save to their watchlist or watchedlist.',
    img: MovieAppImage,
    webLink: 'https://sir-apple.github.io/MovieTrackr/',
    githubLink: 'https://github.com/Sir-Apple/MovieTrackr',
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio (Old Version)',
    type: ['Web'],
    skills: ['HTML', 'CSS', 'JavaScript'],
    desc:
      'My previous version of my portfolio, made with HTML, CSS, and JavaScript',
    img: OldPortfolioImg,
    webLink: 'https://sir-apple-github-io.vercel.app/',
    githubLink: 'https://github.com/Sir-Apple/Sir-Apple.github.io',
  },
  {
    id: uuidv4(),
    name: 'The Haunted',
    type: ['Interactive'],
    skills: ['Unity', 'C#'],
    desc:
      'The Haunted is a short First-person horror and escape-room game. The game begins when the player is stuck inside a completely dark and blacked-out haunted house, the only light sources are candles and the head-mounted flashlight that the character bought with him. The player then is required to unlock doors and puzzles in order to escape from the haunted house as well as run away from the ghost, which interrupts the player.',
    img: TheHaunted,
    downloadLink: 'https://sadapple.itch.io/the-haunted',
  },
];

export default projects;
