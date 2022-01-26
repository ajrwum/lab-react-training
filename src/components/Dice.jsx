import React, { useState } from 'react';

import dice0 from './../assets/images/dice-empty.png';
import dice1 from './../assets/images/dice1.png';
import dice2 from './../assets/images/dice2.png';
import dice3 from './../assets/images/dice3.png';
import dice4 from './../assets/images/dice4.png';
import dice5 from './../assets/images/dice5.png';
import dice6 from './../assets/images/dice6.png';

const faces = [dice1, dice2, dice3, dice4, dice5, dice6];
const values = [1, 2, 3, 4, 5, 6];

// use timeout to display the new face after 1 second
let tId = null;

const Dice = () => {
  console.log('--- --- Dice');
  // create state to kill the timeout after use
  const [id, setId] = useState(tId);
  console.log('id :>> ', id);

  if (id) {
    clearTimeout(id);
    setId(tId);
  }
  
  // create state for the dice
  const [dice, setDice] = useState(dice0);
  let randomIdx;
  
  const pickRandomFace = () => {
    // find a random index to pick a face for the dice
    randomIdx = Math.floor(Math.random() * faces.length);
    console.log('randomIdx :>> ', randomIdx);
    console.log('--- pickRandomFace :>> begin');
    const timeoutId = setTimeout(() => setDice(faces[randomIdx]), 1000);
    console.log('timeoutId :>> ', timeoutId);
    setId(timeoutId);
    console.log('id :>> inside pickRandomFace', id);
  };
  console.log('id :>> after pickRandomFace', id);

  const handleClick = () => pickRandomFace();

  return (
    <div className='dice'>
      <img src={dice} alt={values[randomIdx]} onClick={handleClick} />
    </div>
  );
};

export default Dice;
