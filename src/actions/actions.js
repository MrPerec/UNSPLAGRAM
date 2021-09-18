`use strict`;

import { createApi } from 'unsplash-js';
import { ADD_POST_PHOTO, CHOOSE_POST, LIKE_POST } from '../types/types.js';
import {
  START_POSITION,
  CHARACTERS_NUMBER,
  SYMBOL_T,
  SYMBOL_SPACE,
} from '../constants/constants.js';

const unsplashApi = createApi({
  accessKey: '_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc',
  secret: `3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk`,
});

const getUuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

const requestListPhoto = (api) => {
  return api.photos
    .list({
      page: pageNumber++,
      perPage: 10,
    })
    .then((result) => {
      if (result.errors) return alert(`error occurred: ${result.errors[0]}`);
      return result.response.results;
    });
};

let pageNumber = 1;

export function addPostPhoto() {
  return function (dispatch) {
    requestListPhoto(unsplashApi).then((response) => {
      response.forEach((item) => {
        const uuid = getUuid();
        item.createdAt = item.created_at
          .substr(START_POSITION, CHARACTERS_NUMBER)
          .replace(SYMBOL_T, SYMBOL_SPACE);

        dispatch({
          type: ADD_POST_PHOTO,
          id: uuid,
          urlsFull: item.urls.full,
          urlsSmall: item.urls.small,
          altDescription: item.alt_description,
          userName: item.user.name,
          userLinksHtml: item.user.links.html,
          createdAt: item.createdAt,
          likes: item.likes,
        });
      });
    });
  };
}

/* export function choosePost(id) {
  return {
    type: CHOOSE_POST,
    id,
  };
} */
