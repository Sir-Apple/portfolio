import { v4 as uuidv4 } from 'uuid';
import MovieAppImage from '../my_images/movieapp.PNG';
import OldPortfolioImg from '../my_images/oldportfolio.PNG';
import FooBooLooImg from '../my_images/foobooloo.PNG';
import BanknoteCollectImg from '../my_images/banknotecollection.PNG';
import TheHaunted from '../my_images/thehauntedbg.jpg';
import HerbivoreDelightImg from '../my_images/HerDelightApp.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'FooBooLoo Challenge',
    type: ['Web'],
    skills: ['ReactJS', 'Tailwind CSS', 'TypeScript'],
    desc: 'A mini web game of Fizz-Buzz like game based on the same fundamental rules, just a bit harder.',
    img: FooBooLooImg,
    webLink: 'https://foobooloo-challenge.netlify.app/',
    githubLink: 'https://github.com/Sir-Apple/foobooloo-challenge',
  },
  {
    id: uuidv4(),
    name: 'Movie Trackr',
    type: ['Web'],
    skills: ['ReactJS', 'CSS', 'JavaScript'],
    desc: 'This Mini Movie Trackr App is made with ReactJS with the purpose of searching for movies and their details fetched from TMDB. The user will be able to search for the movie they like then save to their watchlist or watchedlist.',
    img: MovieAppImage,
    webLink: 'https://sir-apple.github.io/MovieTrackr/',
    githubLink: 'https://github.com/Sir-Apple/MovieTrackr',
  },
  {
    id: uuidv4(),
    name: "Herbivore's Delight",
    type: ['Web'],
    skills: ['WordPress'],
    desc: 'A vegetarian recipe website is an online platform dedicated to providing a wide variety of delicious and nutritious plant-based recipes. The website aims to inspire anyone, from beginners to seasoned cooks, to embrace vegetarian cooking and enjoy flavorful, healthy dishes that cater to various dietary preferences.',
    img: HerbivoreDelightImg,
    webLink: 'https://herbivoresdelight.wordpress.com/',
  },
  {
    id: uuidv4(),
    name: 'The Haunted',
    type: ['Game'],
    skills: ['Unity', 'C#'],
    desc: 'The Haunted is a short First-person horror and escape-room game. The game begins when the player is stuck inside a completely dark and blacked-out haunted house, the only light sources are candles and the head-mounted flashlight that the character bought with him. The player then is required to unlock doors and puzzles in order to escape from the haunted house as well as run away from the ghost, which interrupts the player.',
    img: TheHaunted,
    downloadLink: 'https://sadapple.itch.io/the-haunted',
  },
  {
    id: uuidv4(),
    name: 'World Banknotes Collection',
    type: ['Web'],
    skills: ['ReactJS', 'Tailwind CSS', 'TypeScript'],
    desc: 'Displays a collection of the highest denomination banknotes from around the world. The collection shows the front and back side of each banknote.',
    img: BanknoteCollectImg,
    webLink: 'https://world-banknote-collection.netlify.app/',
    githubLink: 'https://github.com/Sir-Apple/banknote-collection',
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio (G Version)',
    type: ['Web'],
    skills: ['HTML', 'CSS', 'JavaScript'],
    desc: 'My G version of my portfolio, made with HTML, CSS, and JavaScript',
    img: OldPortfolioImg,
    webLink: 'https://sir-apple-github-io.vercel.app/',
    githubLink: 'https://github.com/Sir-Apple/Sir-Apple.github.io',
  },
];

export default projects;
