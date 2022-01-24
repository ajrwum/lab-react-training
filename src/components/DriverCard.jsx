import React from 'react';

import Rating from './Rating';

const DriverCard = (props) => {
  const {
    name,
    rating,
    img,
    car: {model, licensePlate}
  } = props;


  return (
    <div className='driver-card'>
      <div><img src={img} alt={name} className="pic" /></div>
      <div className='info'>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{model} - {licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
