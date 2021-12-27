`use strict`;

import React from 'react';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';

export default function AuthPage({
  auth,
  loginAction,
  getAuthUserAction,
  getLikesUserAction,
}) {
  const { login, userName } = auth;
  const ButtonGetLikesUser = () => getLikesUserAction();

  const logIn = (loginAuth, userNameAuth) => {
    if (!loginAuth) loginAction();
    if (!userNameAuth) getAuthUserAction();

    // getLikesUserAction();
  };

  const authStatus = !login
    ? `You are not authorized`
    : `Greating you ${userName}!`;

  // if (!login) loginAction();
  // if (!userName) getAuthUserAction();
  logIn(login, userName);

  return (
    <div>
      <h2 className='button_container'>{authStatus}</h2>
      <ButtonGoHome />
      <div className='button_container'>
        <button className='button button__style' onClick={ButtonGetLikesUser}>
          Get Likes User
        </button>
      </div>
    </div>
  );
}
