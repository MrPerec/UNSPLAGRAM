`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';

export default function AuthPage({ auth, loginAction, getAuthUserAction }) {
  const { login, userName } = auth;

  const logIn = (loginAuth, userNameAuth) => {
    if (!loginAuth) loginAction();
    if (!userNameAuth) getAuthUserAction();
  };
  /* const logIn = (loginAuth, userNameAuth) => {
    if (!loginAuth)
      loginAction().onload = () => {
        if (!userNameAuth) getAuthUserAction();
      };
  }; */
  /*  const logIn = (loginAuth, userNameAuth) => {
    // if (!loginAuth) loginAction().then(getAuthUserAction());
    // if (!loginAuth) loginAction().finally(() => alert('Промис завершён'));
    if (!loginAuth) loginAction();
  }; */
  // const logIn = (action, callbackAction) => {
  //   action.onload = () => callbackAction();
  // };

  const authStatus = !login
    ? `You are not authorized`
    : `Greating you ${userName}!`;

  logIn(login, userName);
  // logIn(loginAction, getAuthUserAction);
  // loginAction.onload = () => getAuthUserAction();

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
