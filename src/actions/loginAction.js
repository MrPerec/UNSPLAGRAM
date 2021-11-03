`use strict`;

import { createApi } from 'unsplash-js';
import { LOGIN } from '../constants/types.js';
import {
  ACCESS_KEY,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
  SECRET_KEY,
} from '../constants/constants.js';

// const SOME_URL = `https://unsplash.com/photos/?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`

// url для авторизации
//ссылка со страницы unsplash `https://unsplash.com/oauth/authorize?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=public+write_likes`
// const AUTH_URL = `https://unsplash.com/oauth/authorize/?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc&redirect_uri=http://localhost:3000&response_type=code&scope=public+write_likes`;
// const AUTH_URL = `https://unsplash.com/oauth/authorize/?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

//тут, после авторизации на unsplash, сохраняется code при помощи которого
//можно запросить и получить токен доступа
// window.location.search

// const configObj = {
//   client_id: `_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`,
//   redirect_uri: `http://localhost:3000`,
//   response_type: `code`,
//   scope: `public+write_likes`,
// };

const unsplash = createApi({
  client_id: ACCESS_KEY,
  redirect_uri: REDIRECT_URI,
  response_type: RESPONSE_TYPE,
  scope: SCOPE,
  secret: SECRET_KEY,
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);

location.assign(authenticationUrl);

/* fetch(AUTH_URL).then((response) => {
  console.log(response);
}); */

export default function loginAction() {
  return {
    type: LOGIN,
  };
}
