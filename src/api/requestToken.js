`use strict`;

import {
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  AUTHORIZATION_CODE,
  TOKEN_URL,
  POST,
  APPLICATION_JSON,
  SEPARATOR_CODE,
} from '../constants/constants.js';

export default function requestToken() {
  const code = window.location.search.split(SEPARATOR_CODE)[1];
  console.log(code);

  const configObj = {
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    redirect_uri: REDIRECT_URI,
    code,
    grant_type: AUTHORIZATION_CODE,
  };

  return fetch(TOKEN_URL, {
    method: POST,
    headers: {
      Accept: APPLICATION_JSON,
      'Content-Type': APPLICATION_JSON,
    },
    body: JSON.stringify(configObj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.access_token);
      return data.access_token;
    });
}
