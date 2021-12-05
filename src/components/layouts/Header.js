`use strict`;

import React from 'react';
import '../../styles/header.css';
// import '../../styles/buttonLogin.css';
import '../../styles/auth.css';
import { AUTH_URL } from '../../constants/constants.js';

export default function Header({ auth, logoutAction }) {
  const { login, userName, profileImage } = auth;
  const onLogout = () => logoutAction();

  const avatarAuthState = userName ? (
    <div>
      <img
        className='avatar avatar_style auth_text_style'
        src={profileImage}
        alt={userName}
      />
      <div className='user-name auth_text_style'>{userName}</div>
    </div>
  ) : null;

  const buttonAuthState = !login ? (
    <a
      href={AUTH_URL}
      className='button-sign-in button-sign-in__style auth_text_style'
    >
      Log In
    </a>
  ) : (
    <button
      className='button-sign-in button-sign-in__style auth_text_style'
      onClick={onLogout}
    >
      Log Out
    </button>
  );

  return (
    <header className='header header__container gray__block'>
      <div className='auth_container auth_container_style'>
        {avatarAuthState}
        {buttonAuthState}
      </div>
      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}
