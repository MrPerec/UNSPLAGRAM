`use strict`;

import React from 'react';
import '../../styles/header.css';
import '../../styles/buttonLogin.css';
import { AUTH_URL } from '../../constants/constants.js';

export default function Header({ auth, logoutAction }) {
  const { login, userName, profileImage } = auth;
  const onLogout = () => logoutAction();

  const buttonAuthState = !login ? (
    <a href={AUTH_URL} className='button-sign-in button-sign-in__style'>
      Log In
    </a>
  ) : (
    <button className='button-sign-in button-sign-in__style' onClick={onLogout}>
      Log Out
    </button>
  );

  const avatarAuthState = userName ? (
    <div>
      <img src={profileImage} alt={userName} />
      <div>{userName}</div>
    </div>
  ) : null;

  // if (!login) getAuthUserAction();

  return (
    <header className='header header__container gray__block'>
      {avatarAuthState}
      {buttonAuthState}
      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}
