`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AUTH_URL } from '../../constants/constants.js';
import '../../styles/header.css';

export default function Header({ auth, logoutAction }) {
  const { login, userName, profileImage } = auth;
  const history = useHistory();
  const onLogout = () => {
    logoutAction();
    history.push(`/`);
    window.location.reload();
  };

  const authState = login ? (
    <div className='header__auth header__auth_container'>
      <div className='header__user-container header__user-container_style'>
        <img
          className='header__avatar header__avatar_container'
          src={profileImage}
          alt={userName}
        />
        <div className='header__user-name header__user-name_text'>
          {userName}
        </div>
      </div>
      <button
        className='header__button header__button_style'
        onClick={onLogout}
      >
        Log Out
      </button>
    </div>
  ) : (
    <div className='header__auth header__auth_container'>
      <a href={AUTH_URL} className='header__button header__button_style'>
        Log In
      </a>
    </div>
  );

  return (
    <header className='header js-header header_decor'>
      <div className='fixed__container fixed__container_size'>
        <div className='flex-container flex-container_padding'>
          <h3 className='header__h3_text-style'>UNSPLAGRAM</h3>
          {authState}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutAction: PropTypes.func.isRequired,
};
