`use strict`;

import React from 'react';
import '../../styles/header.css';
import '../../styles/buttonLogin.css';
import { AUTH_URL } from '../../constants/constants.js';

export default function Header() {
  const authStatus =
    !localStorage.token || localStorage.token === `undefined`
      ? 'Log In'
      : 'Log Out';

  return (
    <header className='header header__container gray__block'>
      <a href={AUTH_URL} className='button-sign-in button-sign-in__style'>
        {authStatus}
      </a>

      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}
