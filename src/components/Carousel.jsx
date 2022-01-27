import React, { useState } from 'react';

const Carousel = ({ images }) => {

  const [image, setImage] = useState({img: images[0], idx: 0});

  const handleClick = action => {
    let imgIndex;
    if (action === 'left') imgIndex = (image.idx - 1 + images.length) % 4;
    else if (action === 'right') imgIndex = (image.idx + 1) % 4;
    setImage({img: images[imgIndex], idx: imgIndex});
  };

  return (
    <div>
      <button onClick={() => handleClick('left')}>Left</button>
      <img src={image.img} alt={image.idx} />
      <button onClick={() => handleClick('right')}>Right</button>
    </div>
  );
};

export default Carousel;
