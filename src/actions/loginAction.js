`use strict`;

import { createApi } from 'unsplash-js';
import { LOGIN } from '../constants/types.js';
import { ACCESS_KEY, REDIRECT_URI } from '../constants/constants.js';

// const SOME_URL = `https://unsplash.com/photos/?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`

// url для авторизации
// const AUTH_URL = `https://unsplash.com/oauth/authorize/?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc&redirect_uri=http://localhost:3000/login&response_type=code&scope=public+write_likes`;

//тут, после авторизации на unsplash, сохраняется code при помощи которого
//можно запросить и получить токен доступа
// window.location.search

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

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);

location.assign(authenticationUrl);

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
