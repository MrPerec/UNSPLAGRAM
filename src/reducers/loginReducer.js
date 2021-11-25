`use strict`;

import { LOGIN } from '../constants/types.js';

export default function loginReducer(state = { login: null }, { type }) {
  switch (type) {
    case LOGIN:
      return { ...state, login: true };

    default:
      return state;
  }
}
