`use strict`;

import unsplash from '../../api/unsplash';
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

  // console.log(configObj);

  if (code !== undefined) {
    fetch(TOKEN_URL, {
      method: `POST`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(configObj),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(`token`, data.access_token);
        console.log(data);
      });
  }
  // console.log(localStorage);

  if (localStorage.token !== undefined) {
    const ACCESS_TOKEN = localStorage.getItem('token');
    // https://unsplash.com/photos/:id/like
    fetch(`https://unsplash.com/photos/zcbtpjgToUY/like`, {
      method: `POST`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    // .then((response) => response.json())
    // .then((data) => {
    //   localStorage.setItem(`token`, data.access_token);
    //   console.log(data);
    // });
  }

  // POST /photos/:id/like

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
