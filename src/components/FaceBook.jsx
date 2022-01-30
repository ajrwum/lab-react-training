import React, { useState } from 'react';

import profiles from './../data/berlin.json';

const FaceBook = () => {
  // create state for the country filter
  const [filter, setFilter] = useState('');

  // create an array of alpahbetically sorted countries (no duplicate) from the profiles array
  const countries = [...new Set(profiles.map(p => p.country)
                                        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())))];
  // console.log('countries :>> ', countries);


  return (
    <div className='fb-profiles'>
      <div className="country-filters">
        <button key='all'
                className={filter === '' ? `fb-btn filter-on` : `fb-btn`}
                onClick={() => setFilter('')} >ALL</button>
        {countries && countries.map(country => {
          return (
            <button key={country}
                    className={filter === country ? `fb-btn filter-on` : `fb-btn`}
                    onClick={() => setFilter(country)} >{country}</button>
          )
        })}
      </div>

      {profiles && profiles.map((p, idx) => {
        return (
          <div className={filter === p.country ? `fb-one filter-on` : `fb-one`} key={idx} >
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
