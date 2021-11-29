`use strict`;

import { LOGIN, LOGOUT } from '../constants/types.js';

const accessToken = localStorage.getItem('token');
const initAuthState = accessToken ? { login: true } : { login: null };

export default function loginReducer(state = initAuthState, { type }) {
  console.log(state);
  switch (type) {
    case LOGIN:
      return { ...state, login: true };

    case LOGOUT:
      return { ...state, login: false };

    // case IS_AUTH:
    //   return { ...state, login: true };

    default:
      return state;
  }
}
