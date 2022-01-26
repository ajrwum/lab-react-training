import React, { useState } from 'react';

const LikeButton = () => {

  const colors = ['purple','blue','green','yellow','orange','red'];

  const [count, setCount] = useState(0);
  
  // console.log('count :>> ', count);
  const pluralForm = count > 1 ? 's' : '';
  // console.log('pluralForm :>> ', pluralForm);
  const idxBgColor = count % colors.length;
  // console.log('idxBgColor :>> ', idxBgColor);

  return (
    <div className='like-button'>
      <button style={{backgroundColor: colors[idxBgColor], color: 'white'}}
        onClick={() => setCount(count + 1)}>{count} Like{pluralForm}</button>
    </div>
  );
};

export default LikeButton;
