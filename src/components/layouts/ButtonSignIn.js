`use strict`;

import React from 'react';
import '../../styles/buttonSignIn.css';

export default function ButtonSignIn() {
  const onSignIn = () => signIn();

  return (
    <div>
      <button
        className='button-sign-in button-sign-in__style'
        onClick={onSignIn}
      >
        Sign In
      </button>
    </div>
  );
}
