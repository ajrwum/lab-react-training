import React from 'react';

const IdCard = (props) => {
  const {lastName, firstName, gender, height, birth, picture} = props;
  
  return (
    <div className="container">
      <div className="card">
        <div><img src={picture} alt={firstName} /></div>
        <div>
          <p><span>First name: </span> {firstName}</p>
          <p><span>Last name: </span> {lastName}</p>
          <p><span>Gender: </span> {gender}</p>
          <p><span>Height: </span> {height / 100}</p>
          <p><span>Birth: </span> {birth.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
