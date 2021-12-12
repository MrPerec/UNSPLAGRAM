`use strict`;

import { LOGIN, LOGOUT, GET_USER, GET_LIKES } from '../constants/types.js';
import { TOKEN, USER_NAME, PROFILE_IMAGE } from '../constants/constants.js';

const accessToken = localStorage.getItem(TOKEN);
const savedUserName = localStorage.getItem(USER_NAME);
const savedProfileImage = localStorage.getItem(PROFILE_IMAGE);

const initAuthState = accessToken
  ? { login: true, userName: savedUserName, profileImage: savedProfileImage }
  : { login: null, userName: null, profileImage: null };

export default function loginReducer(
  state = initAuthState,
  { type, userName, profileImage }
) {
  switch (type) {
    case LOGIN:
      return { ...state, login: true };

    case LOGOUT:
      return { ...state, login: false, userName: null, profileImage: null };

    case GET_USER:
      return { ...state, userName, profileImage };

    case GET_LIKES:
      return { ...state };
    // return { ...state, userName, profileImage };

    default:
      return state;
  }
}
