import React from 'react';

const NumbersTable = ({ limit }) => {
  // create the array
  let arrNum = [];
  for (let i=0 ; i < limit ; i++) {
    const bgStyle = (i+1) % 2 === 0 ? 'red' : 'white';
    arrNum.push({val: i+1, bgStyle: bgStyle});
  }
  return (
    <div className='num-boxes'>
      {arrNum && arrNum.map(n => {
        return <div key={n.val} style={{backgroundColor: n.bgStyle}} className='num-box' ><p>{n.val}</p></div>
      })}
    </div>
  )
};

export default NumbersTable;
