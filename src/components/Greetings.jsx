import React from 'react';

const Greetings = (props) => {

  const { lang, children } = props;
  let greeting = 'Hej';
  if (lang === 'de') greeting = 'Hallo';
  else if (lang === 'en') greeting = 'Hello';
  else if (lang === 'es') greeting = 'Hola';
  else if (lang === 'fr') greeting = 'Bonjour';

  return (
    <div className="container">
      <div className="greeting">
        <p>{greeting} {children}</p>
      </div>
    </div>
  );
};

export default Greetings;
