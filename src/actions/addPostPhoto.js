`use strict`;

import fetchtListPhotos from '../api/fetchtListPhotos';
import { ADD_POST_PHOTO } from '../types/types.js';
import {
  START_POSITION,
  CHARACTERS_NUMBER,
  SYMBOL_T,
  SYMBOL_SPACE,
} from '../constants/constants.js';

const getUuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

export default function addPostPhoto() {
  return function (dispatch) {
    fetchtListPhotos().then((response) => {
      response.forEach((item) => {
        const uuid = getUuid();
        item.createdAt = item.created_at
          .substr(START_POSITION, CHARACTERS_NUMBER)
          .replace(SYMBOL_T, SYMBOL_SPACE);

        dispatch({
          type: ADD_POST_PHOTO,
          id: uuid,
          urlsRegular: item.urls.regular,
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
