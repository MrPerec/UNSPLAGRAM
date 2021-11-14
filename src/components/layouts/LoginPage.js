`use strict`;

import unsplash from '../../api/unsplash';
import React from 'react';
import ButtonGoHome from './ButtonGoHome';
import { AUTH_URL } from '../../constants/constants.js';
import '../../styles/button.css';

export default function LoginPage({ loginAction }) {
  const onLogin = () => loginAction();

  return (
    <div>
      <h2 className='button_container'>You are not authorized</h2>
      <div className='button_container'>
        <a href={AUTH_URL} className='button button__style' onClick={onLogin}>
          Log In
        </a>
      </div>
      <ButtonGoHome />
    </div>
  );
}
