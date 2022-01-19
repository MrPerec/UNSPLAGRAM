`use strict`;

import requestFetch from '../utils/requestFetch';
import { LOGIN, LOGOUT, GET_USER } from '../constants/types.js';
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

const login = (token) => {
  localStorage.setItem(TOKEN, token);

  return {
    type: LOGIN,
  };
};

const getAuthUser = (userData) => {
  localStorage.setItem(USER_NAME, userData.username);
  localStorage.setItem(PROFILE_IMAGE, userData.profile_image.small);

  return {
    type: GET_USER,
    userName: userData.username,
    profileImage: userData.profile_image.small,
  };
};

export function logoutAction() {
  localStorage.clear();
  return {
    type: LOGOUT,
  };
}

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
    requestFetch(TOKEN_URL, POST, bodyConfig).then((response) =>
      dispatch(login(response.access_token))
    );
  };
}

export function getAuthUserAction() {
  return (dispatch) => {
    requestFetch(USER_URL, GET).then((response) =>
      dispatch(getAuthUser(response))
    );
  };
}
