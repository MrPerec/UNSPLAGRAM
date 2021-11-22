`use strict`;

import React from 'react';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';

export default function CallBackPage({ /* loginState, */ loginAction }) {
  // loginAction();
  // console.log(`Token - ${localStorage.token}`);
  // console.log(loginState);

  const authStatus =
    !localStorage.token || localStorage.token === `undefined`
      ? 'You are not authorized'
      : 'You are authorized';

  return (
    <div>
      <h2 className='button_container'>{authStatus}</h2>
      <ButtonGoHome />
    </div>
  );
}
