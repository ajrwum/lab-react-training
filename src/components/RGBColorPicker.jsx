import React, { useState } from 'react';

import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  // creating states for single colors
  const [rValue, setRValue] = useState(255);
  const [gValue, setGValue] = useState(255);
  const [bValue, setBValue] = useState(255);

  // constructing the background style for the result of r, g and b composition
  const rgbBgStyle = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div className='color' >
      <SingleColorPicker color='r' value={rValue} onChange={setRValue} />
      <SingleColorPicker color='g' value={gValue} onChange={setGValue} />
      <SingleColorPicker color='b' value={bValue} onChange={setBValue} />
      <div className='rgb-color' >
        <div className="color" style={{backgroundColor: rgbBgStyle}} ></div>
        <p>{rgbBgStyle}</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
