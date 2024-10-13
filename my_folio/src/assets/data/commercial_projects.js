import { v4 as uuidv4 } from 'uuid';
import CITPImage from '../my_images/codinginthepark.png';
import EpochImg from '../my_images/epoch.png';
import OGHImg from '../my_images/oldgovarsim.png';
import GPGHImg from '../my_images/gogah.jpg';
import AdvanceChessImg from '../my_images/advancechess.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Coding in the Park',
    company: 'Queensland University of Technology',
    type: ['Web'],
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    desc:
      'A website of an education based internal project that focuses on S.T.E.M.(Science, Technology, Engineering and Mathematic), which gives people an altered learning experience using physical activities to catalyse learning. ',
    img: CITPImage,
    githubLink: 'https://github.com/Sir-Apple/CodingInThePark',
  },
  {
    id: uuidv4(),
    name: 'Epoch 2140',
    company: 'Epoch',
    type: ['Web', 'Game', 'Interactive'],
    skills: ['HTML', 'CSS', 'JavaScript', 'Unity', 'C#'],
    desc:
      'Epoch2140 is a sport-style trading card game where players recruit, strategize, and lead their teams to victory, built with Unity and C#. (Currently in development). The landing page, made with HTML, CSS, and JavaScript, provides game details, while the 3D interactive page, also built with Unity and C#, showcases teams and cards.',
    img: EpochImg,
    webLink: 'https://epoch2140.com/',
    gameyoutubeLink: 'https://www.youtube.com/watch?v=WTUkFY_wgHg',
    softwareyoutubeLink: 'https://www.youtube.com/watch?v=UkzMu5wFNSg',
  },
  {
    id: uuidv4(),
    name: 'OGH AR Simulator',
    company: 'Wicked Interactive StoryTelling',
    type: ['Interactive'],
    skills: ['Unity', 'C#'],
    desc:
      'This project is a tour-based experience and simulator application that places the player/user in a position in order to explore the QUT Old Government House in old-timer when it was in active use where the old Queensland Governors were still working and staying at which will be showing on their phone with the app installed. This interaction is made with Unity and C#.',
    img: OGHImg,
    githubLink: 'https://github.com/ybott/IFB398-Prototype',
    downloadLink: 'https://sadapple.itch.io/old-government-house-ar-simulator',
  },
  {
    id: uuidv4(),
    name: 'Greater Powers of Gods and Heroes',
    company: 'Darkstar Games',
    type: ['Game'],
    skills: ['Unity', 'C#'],
    desc:
      'In the game greater powers you, the player, will be able to lead a mighty army based on your high powered heavily armed magical skyship, and engage in massive fleet actions with not only epic ship to ship combat, but full real time boarding actions involving hundreds of enemies and allies battling all at once. The game is made with Unity and C#. (Currently in development) ',
    img: GPGHImg,
    overviewLink: 'https://darkstargames.net/greaterpowers/',
  },
  {
    id: uuidv4(),
    name: 'Battle of Lords: Advance Chess',
    company: 'Advance Studio',
    type: ['Game'],
    skills: ['Unity', 'C#'],
    desc:
      'This is a multi-player board game where each chess piece has its own special moves and abilities which is different from the traditional chess game. This game is made with Unity and C#. (Currently in development) ',
    img: AdvanceChessImg,
  },
];

export default projects;
