import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Coding in the Park',
    company: 'Queensland University of Technology',
    skills: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Epoch 2140',
    company: 'Epoch',
    skills: ['HTML', 'CSS', 'JS', 'Unity', 'C#'],
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'OGH AR Simulator',
    company: 'Wicked Interactive StoryTelling',
    skills: ['Unity', 'C#'],
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Greater Powers of Gods and Heroes',
    company: 'Darkstar Games',
    skills: ['Unity', 'C#'],
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Battle of Lords: Advance Chess',
    company: 'Advance Studio',
    skills: ['Unity', 'C#'],
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
