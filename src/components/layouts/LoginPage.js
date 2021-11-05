`use strict`;

import React from 'react';
import ButtonGoHome from './ButtonGoHome';
import '../../styles/button.css';
import {
  AUTH_URL,
  TOKEN_URL,
  ACCESS_KEY,
  REDIRECT_URI,
  SECRET_KEY,
  AUTHORIZATION_CODE,
} from '../../constants/constants.js';

export default function LoginPage() {
  const onLogin = () => console.log(`Click!`);

  const code = window.location.search.split(`?code=`)[1];

  const configObj = {
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    redirect_uri: REDIRECT_URI,
    code,
    grant_type: AUTHORIZATION_CODE,
  };

  console.log(configObj);

  // if (code !== undefined) {
  //   fetch(TOKEN_URL, {
  //     method: `POST`,
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(configObj),
  //   }).then((response) => {
  //     console.log(response);
  //     return;
  //   });
  // }

  // AUTH_URL1 = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
  // TOKEN_URL1 = `https://unsplash.com/oauth/token?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc&client_secret=3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk&redirect_uri=http://localhost:3000/login&code=fmIrhF-hbpXMEAmuDjq0Eh4zzuTyvg0hIkkCTWWEFGE&grant_type=authorization_code`;

  // if (code !== undefined) {
  //   fetch('https://unsplash.com/oauth/token', {
  //     method: `POST`,
  //     body: {
  //       client_id: '_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc',
  //       client_secret: '3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk',
  //       redirect_uri: 'http://localhost:3000/login',
  //       code: 'fmIrhF-hbpXMEAmuDjq0Eh4zzuTyvg0hIkkCTWWEFGE',
  //       grant_type: 'AUTHORIZATION_CODE',
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     return;
  //   });
  // }

  fetch('https://unsplash.com/oauth/token', { method: 'POST' });

  return (
    <div>
      <h2 className='button_container'>You are not authorized</h2>
      <div className='button_container'>
        {/* <button className='button button__style' onClick={onLogin}>
          Log In
        </button> */}
        <a href={AUTH_URL} className='button button__style' onClick={onLogin}>
          Log In
        </a>
      </div>
      <ButtonGoHome />
    </div>
  );
}
