`use strict`;

import React from 'react';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';

export default function AuthPage({ auth, loginAction, getAuthUserAction }) {
  const { login, userName } = auth;

  const logIn = (loginAuth, userNameAuth) => {
    if (!loginAuth) loginAction();
    if (!userNameAuth) getAuthUserAction();
  };

  const authStatus = !login
    ? `You are not authorized`
    : `Greating you ${userName}!`;

  logIn(login, userName);

  return (
    <div>
      <h2 className='button_container'>{authStatus}</h2>
      <ButtonGoHome />
    </div>
  );
}
