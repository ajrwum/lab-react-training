import React from 'react';

import profiles from './../data/berlin.json';

const FaceBook = () => {
  return (
    <div className='fb-profiles'>
      {profiles && profiles.map((p, idx) => {
        return (
          <div className="fb-one" key={idx} >
            <img src={p.img} alt={p.firstName + ' ' +p.lastName} />
            <div className="info">
              <p><span>First name:</span> {p.firstName}</p>
              <p><span>Last name:</span> {p.lastName}</p>
              <p><span>Country:</span> {p.country}</p>
              <p><span>Type:</span> {p.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default FaceBook;
