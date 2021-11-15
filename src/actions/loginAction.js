`use strict`;

import { LOGIN } from '../constants/types.js';
import {
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  AUTHORIZATION_CODE,
  TOKEN_URL,
} from '../constants/constants.js';

export default function loginAction() {
  const code = window.location.search.split(`?code=`)[1];

  const configObj = {
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    redirect_uri: REDIRECT_URI,
    code,
    grant_type: AUTHORIZATION_CODE,
  };

  // let auth = false;

  if (code !== undefined) {
    fetch(TOKEN_URL, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(configObj),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(`token`, data.access_token);
        // auth = true;
      });
  }
  // console.log(auth);
  return {
    type: LOGIN,
    // auth,
  };
}
