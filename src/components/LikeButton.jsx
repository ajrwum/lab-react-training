import React from 'react';

const LikeButton = (props) => {
  const colors = ['purple','blue','green','yellow','orange','red'];
  const count = 0;
  const pluralForm = count > 1 ? 's' : '';
  const idxBgColor = count % colors.length;

  return (
    <div>
      <button style={{backgroundColor: colors[idxBgColor], color: 'white'}}>{count} Like{pluralForm}</button>
    </div>
  );
};

export default LikeButton;
