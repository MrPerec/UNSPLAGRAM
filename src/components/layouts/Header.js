`use strict`;

import React from 'react';
import '../../styles/header.css';
import '../../styles/buttonLogin.css';
// import { AUTH_URL } from '../../constants/constants.js';

export default function Header({ loginAction }) {
  const onLogin = () => loginAction();

  const authStatus = localStorage.token === undefined ? 'LogIn' : 'LogOut';

  return (
    <header className='header header__container gray__block'>
      {/* <a
        href={AUTH_URL}
        className='button-sign-in button-sign-in__style'
        onClick={onLogin}
      >
        {authStatus}
      </a> */}
      <button
        className='button-sign-in button-sign-in__style'
        onClick={onLogin}
      >
        {authStatus}
      </button>
      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}
