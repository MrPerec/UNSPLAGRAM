`use strict`;

import React from 'react';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';

export default function CallBackPage({ auth, loginAction }) {
  const { login } = auth;

  if (!login) loginAction();

  const authStatus = !login ? 'You are not authorized' : 'You are authorized';

  return (
    <div>
      <h2 className='button_container'>{authStatus}</h2>
      <ButtonGoHome />
    </div>
  );
}
