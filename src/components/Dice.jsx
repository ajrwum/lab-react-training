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

const Dice = () => {
  // console.log('--- --- Dice');
  // getting a random index for the 1st and following displays
  let randomIdx = Math.floor(Math.random() * faces.length);
  // create state for the dice along with the eventual timeoutId
  const [dice, setDice] = useState({face: faces[randomIdx], timeoutId: null});

  const handleClick = () => {
    // clearing the eventual timeout and placing the empty face on display
    if (dice.timeoutId) clearTimeout(dice.timeoutId);
    setDice({face: dice0, timeoutId: null});
    
    // using a callback to be able to set the timeoutId
    const timeoutHandle = () => {
      setDice({face: faces[randomIdx], timeoutId: timeoutId})
    };
    const timeoutId = setTimeout(timeoutHandle, 1000);
  };

  return (
    <div className='dice'>
      <img src={dice.face} alt={values[randomIdx]} onClick={handleClick} />
    </div>
  );
};

export default Dice;
