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
  APPLICATION_JSON,
  SEPARATOR_CODE,
  USER_URL,
  USER_NAME,
  PROFILE_IMAGE,
  // BEARER,
  ERROR,
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
        if (data.error) return alert(`${ERROR} ${data.error_description}`);
        dispatch(login(data.access_token));
      });
  };
}

/* export function getAuthUserAction() {
  const token = localStorage.getItem(TOKEN);
  const headersList = {
    Accept: APPLICATION_JSON,
    CONTENT_TYPE: APPLICATION_JSON,
    Authorization: BEARER + token,
  };

  return (dispatch) => {
    fetch(USER_URL, {
      method: GET,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((data) => dispatch(getAuthUser(data)));
  };
} */

export function getAuthUserAction() {
  return (dispatch) => {
    requestFetch(USER_URL, GET).then((response) =>
      dispatch(getAuthUser(response))
    );
  };
}
