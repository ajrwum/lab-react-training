import React from 'react';

const BoxColor = (props) => {
  const {r, g, b} = props;
  const bgStyle = `rgb(${r},${g},${b})`;
  
  // - getting the hex color
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const bgStyleHex = rgbToHex(r, g, b);

  // - getting the best color to contrast with the bg color
  function betterContrastColor(hex) {
    let threshold = 130; // about 256/2 - lower values results into darker text on dark background
    let colorBrightness = ((hexToRed(hex) * 299) + (hexToGreen(hex) * 587) + (hexToBlue(hex) * 114)) / 1000;
  
    function cleanHex(h) {return (h.charAt(0)==="#") ? h.substring(1,7):h}
    function hexToRed(h) {return parseInt((cleanHex(h)).substring(0,2),16)}
    function hexToGreen(h) {return parseInt((cleanHex(h)).substring(2,4),16)}
    function hexToBlue(h) {return parseInt((cleanHex(h)).substring(4,6),16)}
  
    return (colorBrightness > threshold) ? "#000000" : "#ffffff";
  }
  const contrastColor = betterContrastColor(bgStyleHex);

  return (
    <div className='box-color' style={{backgroundColor: bgStyle, color: contrastColor}}>
      <p>{bgStyle}</p>
      <p>{bgStyleHex}</p>
    </div>
  );
};

export default BoxColor;
