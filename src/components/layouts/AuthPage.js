`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';

export default function AuthPage({ auth, loginAction, getAuthUserAction }) {
  const { login, userName } = auth;

  const authStatus = !login
    ? `You are not authorized`
    : `Greating you ${userName}!`;

  const logIn = (loginAuth, userNameAuth) => {
    if (!loginAuth) loginAction();
    setTimeout(() => {
      if (!userNameAuth) getAuthUserAction();
    }, 1000);
  };

  logIn(login, userName);

  return (
    <div>
      <h2 className='button_container'>{authStatus}</h2>
      <ButtonGoHome />
    </div>
  );
}

AuthPage.propTypes = {
  auth: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
  getAuthUserAction: PropTypes.func.isRequired,
};
