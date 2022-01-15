`use strict`;

import {
  APPLICATION_JSON,
  BEARER,
  TOKEN,
  ERROR,
} from '../constants/constants.js';

export default function requestFetch(urlArgument, method) {
  const token = localStorage.getItem(TOKEN);
  const headersList = {
    Accept: APPLICATION_JSON,
    'Content-Type': APPLICATION_JSON,
    Authorization: BEARER + token,
  };

  return fetch(urlArgument, {
    method,
    headers: headersList,
  }).then((response) => {
    if (!response.ok)
      return alert(`${ERROR} ${response.status} ${response.statusText}`);
    return response.json();
  });
}
