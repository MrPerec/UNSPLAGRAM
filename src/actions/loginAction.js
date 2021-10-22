`use strict`;

import { LOGIN } from '../constants/types.js';
import { ACCESS_KEY, REDIRECT_URI } from '../constants/constants.js';

// const SOME_URL = `https://unsplash.com/photos/?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`
// const q = `https://unsplash.com/oauth/authorize/?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`;
// const AUTH_URL = `https://unsplash.com/oauth/authorize`;

// const configObj = {
//   client_id: ACCESS_KEY,
//   redirect_uri: REDIRECT_URI,
//   response_type: `code`,
//   scope: `public+write_likes`,
// };

const unsplash = createApi({
  client_id: ACCESS_KEY,
  redirect_uri: REDIRECT_URI,
  response_type: `code`,
  scope: `public+write_likes`,
  secret: SECRET_KEY,
});

// const promise = fetch(AUTH_URL, configObj).then((response) => {
//   console.log(response);
//   return;
// });

// console.log(promise);

export default function loginAction() {
  return {
    type: LOGIN,
  };
}
