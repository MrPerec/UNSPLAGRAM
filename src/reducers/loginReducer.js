`use strict`;

import { LOGIN } from '../constants/types.js';

export default function rootReducer(state = [{}], { type }) {
  switch (type) {
    case LOGIN:
      // return { login: true };
      return { ...state, login: true };

    default:
      return state;
  }
}
