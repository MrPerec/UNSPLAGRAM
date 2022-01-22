`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoMain from './ButtonGoMain';
import { TIMER } from '../../constants/constants.js';
import '../../styles/authPage.css';

export default function AuthPage({ auth, loginAction }) {
  const { login, userName } = auth;
  const authStatus = !login
    ? `You are not authorized`
    : `Greating you ${userName}!`;

  if (!login) loginAction();

  setTimeout(() => {
    window.location.href = '/';
  }, TIMER);

  return (
    <div className='auth-page_style'>
      <h2>{authStatus}</h2>
      <div>You will be redirect to the main page in 5 second.</div>
      <div>If it doesn't happen please click the button below.</div>
      <ButtonGoMain />
    </div>
  );
}

AuthPage.propTypes = {
  auth: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
};
