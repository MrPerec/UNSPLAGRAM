`use strict`;

import { LOGIN, IS_AUTH } from '../constants/types.js';

export default function loginReducer(state = { login: null }, { type }) {
  switch (type) {
    case LOGIN:
      return { ...state, login: true };

    // case IS_AUTH:
    //   return { ...state, login: true };

    default:
      return state;
  }
}
