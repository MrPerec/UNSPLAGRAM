`use strict`;

import { LOGIN, IS_AUTH } from '../constants/types.js';

const accessToken = localStorage.getItem('token');
const initAuthState = accessToken ? { login: true } : { login: null };

export default function loginReducer(state = initAuthState, { type }) {
  switch (type) {
    case LOGIN:
      return { ...state, login: true };

    case LOGIN:
      return { ...state, login: false };

    // case IS_AUTH:
    //   return { ...state, login: true };

    default:
      return state;
  }
}
