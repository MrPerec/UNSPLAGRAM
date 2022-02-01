`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AUTH_URL } from '../../constants/constants.js';

import '../../styles/header.css';
import '../../styles/auth.css';

export default function Header({ auth, logoutAction }) {
  const { login, userName, profileImage } = auth;
  const history = useHistory();
  const onLogout = () => {
    logoutAction();
    history.push(`/`);
    window.location.reload();
  };

  const authState = login ? (
    <div className='auth_logined_container auth_logined_container_style'>
      <div>
        <img
          className='avatar avatar_style'
          src={profileImage}
          alt={userName}
        />
        <div className='user-name auth_text_style'>{userName}</div>
      </div>
      <button
        className='button-logout button-logout__style auth_text_style'
        onClick={onLogout}
      >
        Log Out
      </button>
    </div>
  ) : (
    <div className='auth_container auth_container_style'>
      <a
        href={AUTH_URL}
        className='button-sign-in button-sign-in__style auth_text_style'
      >
        Log In
      </a>
    </div>
  );

  return (
    <header className='header header__container gray__block'>
      {authState}
      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutAction: PropTypes.func.isRequired,
};
