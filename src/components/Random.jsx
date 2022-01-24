import React from 'react';

const Random = (props) => {
  const {min, max} = props;
  // where min and max are included
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  const result = `Random value between ${min} and ${max} => ${random}`;
  
  return (
    <div className="container">
      <div className='random'>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Random;
