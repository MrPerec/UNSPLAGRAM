`use strict`;

import {
  APPLICATION_JSON,
  BEARER,
  TOKEN,
  ERROR,
} from '../constants/constants.js';

export default function requestFetch(urlArgument, method, body) {
  const token = localStorage.getItem(TOKEN);
  const headers = {
    Accept: APPLICATION_JSON,
    'Content-Type': APPLICATION_JSON,
    Authorization: BEARER + token,
  };

  const options = !body ? { method, headers } : { method, headers, body };

  return fetch(urlArgument, options).then((response) => {
    if (!response.ok)
      return alert(`${ERROR} ${response.status} ${response.statusText}`);
    return response.json();
  });
}
