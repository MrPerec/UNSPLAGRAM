`use strict`;

import { LOGIN } from '../constants/types.js';
import {
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  AUTHORIZATION_CODE,
  TOKEN_URL,
  POST,
  APPLICATION_JSON,
  TOKEN,
  SEPARATOR_CODE,
} from '../constants/constants.js';

export default function loginAction() {
  const code = window.location.search.split(SEPARATOR_CODE)[1];

  const configObj = {
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    redirect_uri: REDIRECT_URI,
    code,
    grant_type: AUTHORIZATION_CODE,
  };

  //засунуть в ассинхронную логику???
  // if (code !== undefined) {
  //   fetch(TOKEN_URL, {
  //     method: POST,
  //     headers: {
  //       Accept: APPLICATION_JSON,
  //       'Content-Type': APPLICATION_JSON,
  //     },
  //     body: JSON.stringify(configObj),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       localStorage.setItem(TOKEN, data.access_token);
  //     });
  // }

  // return {
  //   type: LOGIN,
  // };

  return (dispatch) => {
    if (code !== undefined) {
      fetch(TOKEN_URL, {
        method: POST,
        headers: {
          Accept: APPLICATION_JSON,
          'Content-Type': APPLICATION_JSON,
        },
        body: JSON.stringify(configObj),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(TOKEN, data.access_token);
          dispatch({
            type: LOGIN,
          });
        });
    }
  };
}
