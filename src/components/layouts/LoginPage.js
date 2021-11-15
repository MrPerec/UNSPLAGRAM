`use strict`;

import React from 'react';
import ButtonGoHome from './ButtonGoHome';
import { AUTH_URL } from '../../constants/constants.js';
import '../../styles/button.css';

export default function LoginPage({ loginAction }) {
  const onLogin = () => loginAction();

  console.log(localStorage.token);

  // const isAuth = () => {
  //   if (localStorage.token !== undefined) {
  //     console.log('You are authorized');
  //     // return <h2 className='button_container'>You are authorized</h2>;
  //     return 'You are authorized';
  //   }
  //   if (localStorage.token === undefined) {
  //     console.log('You are not authorized');
  //     // return <h2 className='button_container'>You are not authorized</h2>;
  //     return 'You are not authorized';
  //   }
  // };
  const auth =
    localStorage.token !== undefined
      ? 'You are authorized'
      : 'You are not authorized';

  // isAuth();

  return (
    <div>
      {/* <h2 className='button_container'>You are not authorized</h2> */}
      <h2 className='button_container'>{auth}</h2>
      <h2 className='button_container'></h2>
      <div className='button_container'>
        <a href={AUTH_URL} className='button button__style' onClick={onLogin}>
          Log In
        </a>
      </div>
      <ButtonGoHome />
    </div>
  );
}
