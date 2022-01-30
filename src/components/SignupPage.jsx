import React, { useState } from 'react';

const SignupPage = () => {
  // create states for the form's inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const [emailMsg, setEmailMsg] = useState({type: '', text: ''});
  const [passwordMsg, setPasswordMsg] = useState({type: '', text: ''});
  const [nationalHello, setNationalHello] = useState('');
  const [hasSignedUp, setHasSignedUp] = useState(false);


  const handleReset = () => {
    setEmail('');
    setPassword('');
    setNationality('en');
    setEmailMsg({type: '', text: ''});
    setPasswordMsg({type: '', text: ''});
    setNationalHello('');
    setHasSignedUp(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      console.log('email NOT VALID :>> ', email);
      setEmailMsg({ type: 'error', text: 'Provide a valid email address.' });
    }
    else {
      console.log('email ok :>> ', email);
      setEmailMsg({ type: 'success', text: 'You typed a valid email address.' });
    }

    // check password
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      console.log('password TOO WEAK :>> ', password);
      setPasswordMsg({ type: 'error', text: 'Your password too weak.' });
    }
    else {
      console.log('password OK :>> ', password);
      setPasswordMsg({ type: 'success', text:'Your password is quite strong.'});
    }

    // check nationality to set the helloWord
    console.log('nationality :>> ', nationality);
    switch (nationality) {
      case 'en':
        setNationalHello('Hello!');
        break;
      case 'de':
        setNationalHello('Hallo!');
        break;
      case 'fr':
        setNationalHello('Bonjour !');
        break;
      default:
        setNationalHello('');
    }

    // set state for result display
    setHasSignedUp(true);
  }

  return (
    <div className='signup'>
      <div className="reset">
        <button onClick={handleReset} >RESET SIGNUP FORM</button>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"
                  className={emailMsg.type}
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
          {emailMsg.text && <p className={emailMsg.type}>{emailMsg.text}</p> }
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"
                  className={passwordMsg.type}
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
          {passwordMsg.text && <p className={passwordMsg.type}>{passwordMsg.text}</p> }
        </div>
        <div className="nationality">
          <label htmlFor="nationality">Nationality</label>
          <select name="nationality" id="nationality"
                  value={nationality}
                  onChange={e => setNationality(e.target.value)} >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button>SIGNUP</button>
      </form>
      {hasSignedUp &&
        (<div className="signup-result">
          <p>{nationalHello}</p>
          <p>Your email is: {email}</p>
          {emailMsg.text && <p>{emailMsg.text}</p>}
          {passwordMsg.text && <p>{passwordMsg.text}</p>}
        </div>)
      }
    </div>
  );
};

export default SignupPage;
