`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';

export default function AuthPage({ auth, loginAction }) {
  const { login, userName } = auth;

  const authStatus = !login
    ? `You are not authorized`
    : `Greating you ${userName}!`;

  if (!login) loginAction();

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
};
