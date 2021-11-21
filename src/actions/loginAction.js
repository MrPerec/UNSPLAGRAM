`use strict`;

import { LOGIN } from '../constants/types.js';
/* import { TOKEN } from '../constants/constants.js'; */
import requestToken from '../api/requestToken';

export default function loginAction() {
  return (dispatch) => {
    requestToken().then((response) => {
      console.log(response);
      // localStorage.setItem(TOKEN, data.access_token);
      dispatch({
        type: LOGIN,
      });
    });
  };
}
