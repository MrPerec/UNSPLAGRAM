`use strict`;

import React from 'react';
import ButtonGoBack from './ButtonGoBack';
import '../../styles/button.css';

export default function LoginPage() {
  const onLogin = () => console.log(`Congratulations, you are log in!`);

  return (
    <div>
      <h2 className='button_container'>You are not log in</h2>
      <div className='button_container'>
        <button className='button button__style' onClick={onLogin}>
          Log In
        </button>
      </div>
      <ButtonGoBack />
    </div>
  );
}
