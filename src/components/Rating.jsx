import React from 'react';

const Rating = ({children}) => {
  // 0: '☆'
  // 1: '★'
  console.log('children :>> ', children);
  const getRating = value => {
    return '☆☆☆☆☆'.split('')
                  .map((el, idx) => {
                    return idx <= Math.round(value) - 1 ? '★' : el;
                  })
                  .join('');
  };

  return (
  <div>
    <p>{getRating(children)}</p>
  </div>
  );
};

export default Rating;
