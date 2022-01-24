import React from 'react';

import visaPic from './../assets/images/visa.png';
import mcPic from './../assets/images/master-card.svg';

const CreditCard = (props) => {
  // getting props
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props;

  const strNum = `•••• •••• •••• ${number.slice(-4)}`;

  const getPic = type => {
    if (type === 'Visa') return visaPic;
    if (type === 'Master Card') return mcPic;
  }

  return (
    <div className='credit-card' style={{backgroundColor: bgColor, color: color}}>
      <div className='logo'><img src={getPic(type)} alt={type} /></div>
      <div className="card-number"><p>{strNum}</p></div>
      <div className="info">
        <p>Expires {expirationMonth}/{String(expirationYear).slice(-2)}<span>{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
