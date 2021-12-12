`use strict`;

<<<<<<< HEAD:src/actions/authActions.js
import { LOGIN, LOGOUT, GET_USER, GET_LIKES } from '../constants/types.js';
=======
import { LOGIN, LOGOUT, GET_USER } from '../constants/types.js';
>>>>>>> 400eba0017d2b619746772869b2740818d6d1746:src/actions/authAction.js
import {
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  AUTHORIZATION_CODE,
  TOKEN,
  TOKEN_URL,
<<<<<<< HEAD:src/actions/authActions.js
  GET,
=======
>>>>>>> 400eba0017d2b619746772869b2740818d6d1746:src/actions/authAction.js
  POST,
  APPLICATION_JSON,
  SEPARATOR_CODE,
  USER_URL,
<<<<<<< HEAD:src/actions/authActions.js
=======
  GET,
>>>>>>> 400eba0017d2b619746772869b2740818d6d1746:src/actions/authAction.js
  USER_NAME,
  PROFILE_IMAGE,
  BEARER,
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

<<<<<<< HEAD:src/actions/authActions.js
const getLikesUser = (likesUser) => {
  // console.log(likes);
  const likes = likesUser.map(({ id, liked_by_user }) => {
    return { id, liked_by_user };
  });
  console.log(likes);
  // likesUser.map(({ id, liked_by_user }) => console.log(id, liked_by_user));
  // localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(commentsCopy));
  // const savedComments = JSON.parse( localStorage.getItem(STORAGE_COMMENTS) );

  return {
    type: GET_LIKES,
  };
};

=======
>>>>>>> 400eba0017d2b619746772869b2740818d6d1746:src/actions/authAction.js
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
        if (data.error) return alert(`error: ${data.error_description}`);
        dispatch(login(data.access_token));
      });
  };
}

export function getAuthUserAction() {
  const token = localStorage.getItem(TOKEN);
<<<<<<< HEAD:src/actions/authActions.js
  const headersList = {
    Accept: APPLICATION_JSON,
    CONTENT_TYPE: APPLICATION_JSON,
    Authorization: BEARER + token,
  };
=======
>>>>>>> 400eba0017d2b619746772869b2740818d6d1746:src/actions/authAction.js

  return (dispatch) => {
    fetch(USER_URL, {
      method: GET,
<<<<<<< HEAD:src/actions/authActions.js
      headers: headersList,
=======
      headers: {
        Accept: APPLICATION_JSON,
        'Content-Type': APPLICATION_JSON,
        Authorization: BEARER + token,
      },
>>>>>>> 400eba0017d2b619746772869b2740818d6d1746:src/actions/authAction.js
    })
      .then((response) => response.json())
      .then((data) => dispatch(getAuthUser(data)));
  };
}

<<<<<<< HEAD:src/actions/authActions.js
export function getLikesUserdAction() {
  const token = localStorage.getItem(TOKEN);
  const userName = localStorage.getItem(USER_NAME);
  const headersList = {
    Accept: APPLICATION_JSON,
    CONTENT_TYPE: APPLICATION_JSON,
    Authorization: BEARER + token,
  };

  return (dispatch) => {
    fetch(`https://api.unsplash.com/users/${userName}/likes`, {
      method: GET,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((data) => dispatch(getLikesUser(data)));
=======
export function getUsersLikedAction() {
  const token = localStorage.getItem(TOKEN);

  return (dispatch) => {
    fetch(`https://api.unsplash.com/users/MrPerec/likes`, {
      method: GET,
      headers: {
        Accept: APPLICATION_JSON,
        'Content-Type': APPLICATION_JSON,
        Authorization: BEARER + token,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(getAuthUser(data)));
>>>>>>> 400eba0017d2b619746772869b2740818d6d1746:src/actions/authAction.js
  };
}
