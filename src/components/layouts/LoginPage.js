`use strict`;

import React from 'react';
import ButtonGoHome from './ButtonGoHome';
// import { AUTH_URL } from '../../constants/constants.js';
import '../../styles/button.css';

export default function LoginPage({ loginAction }) {
  // export default function LoginPage(props) {
  // console.log(props);
  const onLogin = () => loginAction();

  const authStatus =
    localStorage.token === undefined
      ? 'You are not authorized'
      : 'You are authorized';

  return (
    <div>
      <h2 className='button_container'>{authStatus}</h2>
      <h2 className='button_container'></h2>
      <div className='button_container'>
        {/* <a href={AUTH_URL} className='button button__style' onClick={onLogin}>
          Log In
        </a> */}
        <button className='button button__style' onClick={onLogin}>
          Log In
        </button>
      </div>
      <ButtonGoHome />
    </div>
  );
}
