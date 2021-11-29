`use strict`;

import React from 'react';
import '../../styles/header.css';
import '../../styles/buttonLogin.css';
import { AUTH_URL } from '../../constants/constants.js';
// import { Link } from 'react-router-dom';

export default function Header({ auth, logoutAction }) {
  const { login } = auth;
  console.log(login);
  const onLogout = () => logoutAction();

  // const authStatus = !login ? 'Log In' : 'Log Out';

  /* const authState = !login ? (
    <a href={AUTH_URL} className='button-sign-in button-sign-in__style'>
      Log In
    </a>
  ) : (
    <div>
      <Link to={{ pathname: `/authPage` }}>
        <button className='button-sign-in button-sign-in__style'>
          Log Out
        </button>
      </Link>
    </div>
  ); */

  const authState = !login ? (
    <a href={AUTH_URL} className='button-sign-in button-sign-in__style'>
      Log In
    </a>
  ) : (
    <button className='button-sign-in button-sign-in__style' onClick={onLogout}>
      Log Out
    </button>
  );

  return (
    <header className='header header__container gray__block'>
      {authState}
      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}
