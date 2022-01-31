import React from 'react';

const SingleColorPicker = ({ color, value, onChange }) => {
  const bgStyle = `rgb(${color === 'r' ? value : 0}, ${color === 'g' ? value : 0}, ${color === 'b' ? value : 0})`;
  // console.log('bgStyle :>> ', bgStyle);

  return (
    <div className='single-color' >
      <div className="color" style={{backgroundColor: bgStyle}}></div>
      <p>{color.toUpperCase()}:</p>
      <input type="number" name={color} id={color}
              min="0" max="255"
              value={value}
              onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default SingleColorPicker;
