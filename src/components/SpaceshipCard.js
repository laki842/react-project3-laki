import React from 'react';
import '../Styles/componentsStyles/SpaceshipCard.css';

function SpaceshipCard({ parts, glow }) {
  return (
    <div className='spaceship-cards'>
      {/* return array of the same length as data */}
      {parts.map((part) => {
        return (
          <div
            className={`spaceship-card ${glow ? 'spaceship-card-glow' : null}`}
            key={part.id}>
            <h2 className='spaceship-title'>{part.name}</h2>
            <img src={part.pic} alt='picture' className='spaceship-img' />
            <h2 className='spaceship-year'>{part.year}</h2>
            <p className='spaceship-desc'>{part.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SpaceshipCard;
