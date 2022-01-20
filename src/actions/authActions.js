`use strict`;

import requestFetch from '../utils/requestFetch';
import { LOGIN, LOGOUT } from '../constants/types.js';
import {
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  AUTHORIZATION_CODE,
  TOKEN,
  TOKEN_URL,
  GET,
  POST,
  SEPARATOR_CODE,
  USER_URL,
  USER_NAME,
  PROFILE_IMAGE,
} from '../constants/constants.js';

const login = (userData) => {
  return {
    type: LOGIN,
    userName: userData.username,
    profileImage: userData.profile_image.small,
  };
};

export function loginAction() {
  const code = window.location.search.split(SEPARATOR_CODE)[1];
  const bodyConfig = JSON.stringify({
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    redirect_uri: REDIRECT_URI,
    code,
    grant_type: AUTHORIZATION_CODE,
  });

  return (dispatch) => {
    requestFetch(TOKEN_URL, POST, bodyConfig).then((response) => {
      localStorage.setItem(TOKEN, response.access_token);
      requestFetch(USER_URL, GET).then((response) => {
        localStorage.setItem(USER_NAME, response.username);
        localStorage.setItem(PROFILE_IMAGE, response.profile_image.small);
        dispatch(login(response));
      });
    });
  };
}

export function logoutAction() {
  localStorage.clear();
  return {
    type: LOGOUT,
  };
}
