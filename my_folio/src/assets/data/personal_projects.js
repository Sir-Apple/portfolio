import { v4 as uuidv4 } from 'uuid';
import MovieAppImage from '../my_images/movieapp.PNG';
import OldPortfolioImg from '../my_images/oldportfolio.PNG';
import FooBooLooImg from '../my_images/foobooloo.PNG';
import BanknoteCollectImg from '../my_images/banknotecollection.PNG';
import TheHaunted from '../my_images/thehauntedbg.jpg';
import HerbivoreDelightImg from '../my_images/HerDelightApp.PNG';
import HerbivoreDelightImg2 from '../my_images/HerbivoreDelight.JPG';
import MangaSpaceImg from '../my_images/manga-space.JPG';
import EndlessRunnerImg from '../my_images/ue-endless-runner.png';

const projects = [
  {
    id: uuidv4(),
    name: 'My Manga Space',
    type: ['Web'],
    skills: ['ReactJS', 'CSS', 'JavaScript'],
    desc: 'My Manga Space is a React-based manga browsing platform that fetches and displays up-to-date manga content from the OtruyenAPI which is Vietnamese-subbed for Vietnamese manga readers.',
    img: MangaSpaceImg,
    webLink: 'https://manga-space.netlify.app/home',
    githubLink: 'https://github.com/Sir-Apple/manga-space',
  },
  {
    id: uuidv4(),
    name: 'Herbivores Delight',
    type: ['Web'],
    skills: ['ReactJS', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'NextJS'],
    desc: 'A vegetarian recipe website is an online platform dedicated to providing a wide variety of delicious and nutritious plant-based recipes. The website aims to inspire anyone, from beginners to seasoned cooks, to embrace vegetarian cooking and enjoy flavorful, healthy dishes that cater to various dietary preferences.',
    img: HerbivoreDelightImg2,
    webLink: 'https://herbivore-delight.netlify.app/',
    githubLink: 'https://github.com/Sir-Apple/vegetarian-recipes',
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
    desc: 'A WordPress vegetarian recipe website is an online platform dedicated to providing a wide variety of delicious and nutritious plant-based recipes. The website aims to inspire anyone, from beginners to seasoned cooks, to embrace vegetarian cooking and enjoy flavorful, healthy dishes that cater to various dietary preferences.',
    img: HerbivoreDelightImg,
    webLink: 'https://herbivoresdelight.wordpress.com/',
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
    name: 'Endless Runner',
    type: ['Game'],
    skills: ['Unreal Engine', 'C++'],
    desc: 'Endless Runner is a 3D game made with Unreal Engine. The player will control a character that runs through an endless track and avoiding obstacles.',
    img: EndlessRunnerImg,
    downloadLink:
      'https://drive.google.com/file/d/1u-WdfJcYPp8rgtJGsyimzMq3XeMkwQ5G/view?usp=sharing',
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
