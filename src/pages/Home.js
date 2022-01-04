import React, { useState, useEffect } from 'react';
import SpaceshipCard from '../components/SpaceshipCard';
import '../Styles/pagesStyles/Home.css';
import { propulsions } from '../components/data';

function Home() {
  const [spacePropulsions, setSpacePropulsions] = useState(propulsions);
  const [count, setCount] = useState();
  const [glow, setGlow] = useState(false);

  // functionality for buttons
  const filterBtns = (btn) => {
    // if argument is all, then use full data
    if (btn === 'all') {
      setSpacePropulsions(propulsions);
      return;
    }
    // show items only with same property in data and in button
    const filterSpaceships = propulsions.filter(
      (propulsion) => propulsion.category === btn
    );
    setSpacePropulsions(filterSpaceships);
  };

  useEffect(() => {
    setCount(spacePropulsions.length);
    setGlow(true);
    // make cards glow for some time
    const glowTimer = setTimeout(() => {
      setGlow(false);
    }, 2000);
    // cleanup
    return () => clearTimeout(glowTimer);
    // example how to add render condition to useEffect
  }, [spacePropulsions]);

  return (
    <>
      <section className='home'>
        <h1>Space Propulsion</h1>
        <h1>{count}</h1>
        <div className='home-wrapper'>
          <ul>
            <li>
              {/* functionality with argument */}
              <button onClick={() => filterBtns('all')}>All engines</button>
            </li>
            <li>
              <button onClick={() => filterBtns('chemical')}>
                Chemical engine
              </button>
            </li>
            <li>
              <button onClick={() => filterBtns('ion')}>Ion engine</button>
            </li>
            <li>
              <button onClick={() => filterBtns('magnetoplasma')}>
                Magnetoplasma engine
              </button>
            </li>
            <li>
              <button onClick={() => filterBtns('fission')}>
                Fission engine
              </button>
            </li>
            <li>
              <button onClick={() => filterBtns('fusion')}>
                Fusion engine
              </button>
            </li>
            <li>
              <button onClick={() => filterBtns('antimatter')}>
                Antimatter engine
              </button>
            </li>
            <li>
              <button onClick={() => filterBtns('alcubierre')}>
                Alcubierre drive
              </button>
            </li>
          </ul>
          <div>
            <SpaceshipCard parts={spacePropulsions} glow={glow} />
          </div>
        </div>
      </section>
      <div className='footer'>
        <h4>Copyright &copy; 2021 Laki Production's. All Rights Reserved</h4>
      </div>
    </>
  );
}

export default Home;
