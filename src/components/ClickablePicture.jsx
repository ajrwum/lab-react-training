import React, { useState } from 'react';

import max from './../assets/images/maxence.png';
import maxGlasses from './../assets/images/maxence-glasses.png';

const ClickablePicture = ({img, imgClicked}) => {
  const [count, setCount] = useState(0);
  
  const pics = [max, maxGlasses];
  const idxPic = count % 2 === 0 ? 0 : 1;

  return (
    <div className='clickable-picture'>
      <img src={pics[idxPic]} alt={'maxence with or without funny glasses'}
            onClick={() => setCount(count + 1)}/>
    </div>
  );
};

export default ClickablePicture;
