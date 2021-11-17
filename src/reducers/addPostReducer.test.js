`use strict`;

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

export default function addPostReducer(
  state = [{}],
  {
    type,
    urlsRegular,
    urlsSmall,
    altDescription,
    userName,
    userLinksHtml,
    createdAt,
    likes,
    likedByUser,
  }
) {
  switch (type) {
    case ADD_POST_PHOTO:
      const uuid = getUuid();
      createdAt
        .substr(START_POSITION, CHARACTERS_NUMBER)
        .replace(SYMBOL_T, SYMBOL_SPACE);

      return [
        ...state,
        {
          id: uuid,
          urlsRegular,
          urlsSmall,
          altDescription,
          userName,
          userLinksHtml,
          createdAt,
          likes,
          likedByUser,
        },
      ];

    default:
      return state;
  }
}
