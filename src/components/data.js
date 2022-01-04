import img1 from '../images/Saturn V.jpg';
import img2 from '../images/Space Shuttle.jpg';
import img3 from '../images/Falcon 9.jpeg';
import img4 from '../images/Juno.jpeg';
import img5 from '../images/Vasimr.jpeg';
import img6 from '../images/Project Prometheus.jpg';
import img7 from '../images/Project Daedalus.jpg';
import img8 from '../images/Antimatter.jpeg';
import img9 from '../images/Alcubierre.jpeg';

export const propulsions = [
  {
    id: 1,
    category: 'chemical',
    name: 'Saturn V',
    pic: img1,
    year: 1969,
    desc: 'First rocket to put man on the Moon.',
  },
  {
    id: 2,
    category: 'chemical',
    name: 'Space shuttle',
    pic: img2,
    year: 1990,
    desc: 'Responsible for the launch of Hubble space telescope.',
  },
  {
    id: 3,
    category: 'chemical',
    name: 'Falcon 9',
    pic: img3,
    year: 2019,
    desc: 'First Starlink mission.',
  },
  {
    id: 4,
    category: 'ion',
    name: 'Juno',
    pic: img4,
    year: 2011,
    desc: 'Scientific investigation of Jupiter.',
  },
  {
    id: 5,
    category: 'magnetoplasma',
    name: 'Vasimr',
    pic: img5,
    year: 'in development',
    desc: 'Superior ion engine at the cost of increased electricity consumption.',
  },
  {
    id: 6,
    category: 'fission',
    name: 'Project Prometheus',
    pic: img6,
    year: 'concept',
    desc: 'Was established in 2003 by NASA to develop nuclear-powered systems for long-duration space missions.',
  },
  {
    id: 7,
    category: 'fusion',
    name: 'Project Daedalus',
    pic: img7,
    year: 'concept',
    desc: 'In theory it can reach the speed of 12% of the speed of light.',
  },
  {
    id: 8,
    category: 'antimatter',
    name: 'Project Valkyrie',
    pic: img8,
    year: 'concept',
    desc: 'The Valkyrie is theoretically able to accelerate to 92% the speed of light.',
  },
  {
    id: 9,
    category: 'alcubierre',
    name: 'Warp drive',
    pic: img9,
    year: 'concept',
    desc: 'Requires exotic matter to run. ',
  },
];
