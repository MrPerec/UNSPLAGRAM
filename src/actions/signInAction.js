`use strict`;

import { SIGN_IN } from '../types/types.js';
import { ACCESS_KEY } from '../constants/constants.js';

export default function signInAction() {
  const configObj = {
    client_id: ACCESS_KEY,
    redirect_uri: CALLBACK_URI,
    response_type: `code`,
    scope: `public+write_likes`,
  };

  return {
    type: SIGN_IN,
    id,
  };
}
