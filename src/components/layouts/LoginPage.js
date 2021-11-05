`use strict`;

import React from 'react';
import ButtonGoBack from './ButtonGoBack';
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

  if (code.length > 0) {
    fetch(TOKEN_URL, {
      method: `POST`,
      /* headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, */
      /* headers: {
        'Content-Type': `text/plain`,
      }, */
      // body: JSON.stringify(configObj),
      body: {
        client_id: ACCESS_KEY,
        client_secret: SECRET_KEY,
        redirect_uri: REDIRECT_URI,
        code,
        grant_type: AUTHORIZATION_CODE,
      },
    }).then((response) => {
      console.log(response);
      return;
    });
  }

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
      <ButtonGoBack />
    </div>
  );
}
