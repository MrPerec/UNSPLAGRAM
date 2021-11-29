`use strict`;

import { LOGIN, LOGOUT } from '../constants/types.js';
import {
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  AUTHORIZATION_CODE,
  TOKEN,
  TOKEN_URL,
  POST,
  APPLICATION_JSON,
  SEPARATOR_CODE,
} from '../constants/constants.js';

const login = () => {
  return {
    type: LOGIN,
  };
};

/* const logout = () => {
  return {
    type: LOGOUT,
  };
}; */

/* const isAuthorized = () => {
  return {
    // type: IS_AUTH,
    type: LOGIN,
  };
}; */

export function loginAction() {
  const code = window.location.search.split(SEPARATOR_CODE)[1];

  const configObj = {
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    redirect_uri: REDIRECT_URI,
    code,
    grant_type: AUTHORIZATION_CODE,
  };

  return (dispatch) => {
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
        if (data.error) return alert(`error: ${data.error_description}`);
        localStorage.setItem(TOKEN, data.access_token);
        dispatch(login());
      });
  };
}

export function logoutAction() {
  localStorage.clear();
  return {
    type: LOGOUT,
  };
}

/* export function isAuthorizedAction() {
  const accessToken = localStorage.getItem('token');
  console.log(accessToken);
  // if (accessToken) return isAuthorized();
  // if (!accessToken) login()
} */
