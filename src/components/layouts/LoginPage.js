`use strict`;

import React from 'react';
import ButtonGoBack from './ButtonGoBack';
import '../../styles/button.css';
import { AUTH_URL } from '../../constants/constants.js';

export default function LoginPage() {
  const onLogin = () => console.log(`Click!`);

  const GET_TOKEN_URL = `https://unsplash.com/oauth/token`;

  const configObj = {
    client_id: `_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`,
    client_secret: `3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk`,
    redirect_uri: `http://localhost:3000`,
    code: `code=z46wHdCdhK8gFUrWA2eBt_JOo1AtOS9HTtNEwP2hxQs`,
    grant_type: `authorization_code`,
  };

  fetch(`https://unsplash.com/oauth/token`, {
    method: `POST`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: `_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`,
      client_secret: `3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk`,
      redirect_uri: `http://localhost:3000`,
      code: `code=z46wHdCdhK8gFUrWA2eBt_JOo1AtOS9HTtNEwP2hxQs`,
      grant_type: `authorization_code`,
    }),
  }).then((response) => {
    console.log(response);
    return;
  });

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
