`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoMain from './ButtonGoMain';
import { TIMER } from '../../constants/constants.js';

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
    <main className='main'>
      <div className='fixed__container fixed__container_size'>
        <div className='center center_container'>
          <h2>{authStatus}</h2>
          <p>You will be redirect to the main page in 5 second.</p>
          <p>If it doesn't happen please click the button below.</p>
          <ButtonGoMain />
        </div>
      </div>
    </main>
  );
}

AuthPage.propTypes = {
  auth: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
};
