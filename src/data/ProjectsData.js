import { v4 as uuidv4 } from 'uuid';
import PTGImg from '../assets/images/ptg.png';
import RomCIVImg from '../assets/images/romciv.png';
import AnDatImg from '../assets/images/achromex.png';
import MineSwImg from '../assets/images/minesweeper.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Pocket Travel Guide',
    desc:
      'An advanced travel guide application using Google Maps and Rapid API. Provides information about area specific restaurant, hotels and attractions as well as weather.',
    img: PTGImg,
  },
  {
    id: uuidv4(),
    name: 'Roman Civilisation Game',
    desc:
      'An extended project built upon the framework of a Risk style course project. The game enforces more extensions that enhances the game including implementing immersive background music, having a multiplayer campaign rather than a one player vs CP and the ability to choose your path to campaign victory.',
    img: RomCIVImg,
  },
  {
    id: uuidv4(),
    name: 'Anime Database',
    desc:
      'An application that welcomes you with a greeting, daily picked anime, the top anime for the week and the ability to search for any anime.',
    img: AnDatImg,
  },
  {
    id: uuidv4(),
    name: 'Minesweeper',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: MineSwImg,
  },
];

export default projects;