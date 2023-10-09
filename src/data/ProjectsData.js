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
    link: 'https://github.com/rizmanter11/pockettravelguide',
  },
  {
    id: uuidv4(),
    name: 'Roman Civilisation Game',
    desc:
      'An extended project built upon the framework of a Risk style course project. The game enforces more extensions that enhances the game including implementing immersive background music, having a multiplayer campaign rather than a one player vs CP and the ability to choose your path to campaign victory.',
    img: RomCIVImg,
    link: 'https://github.com/rizmanter11/romancivilisation_game',
  },
  {
    id: uuidv4(),
    name: 'Anime Database',
    desc:
      'An application that welcomes you with a greeting, daily picked anime, the top anime for the week and the ability to search for any anime.',
    img: AnDatImg,
    link: 'https://github.com/rizmanter11/anime-a-day',
  },
  {
    id: uuidv4(),
    name: 'Minesweeper',
    desc:
      'A current low level implementation of minesweeper that runs on command-line. Uses recursive algorithm to uncover board after every choice and display board with numbers indicating neighbours that are bombs.',
    img: MineSwImg,
    link: 'https://github.com/rizmanter11/minesweeper',
  },
];

export default projects;