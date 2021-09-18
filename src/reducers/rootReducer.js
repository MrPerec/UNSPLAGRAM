`use strict`;

import { ADD_POST_PHOTO } from '../types/types.js';

export default function reducers(
  state = [{}],
  {
    type,
    id,
    urlsFull,
    urlsSmall,
    altDescription,
    userName,
    userLinksHtml,
    createdAt,
    likes,
  }
) {
  switch (type) {
    case ADD_POST_PHOTO:
      return [
        ...state,
        {
          id,
          urlsFull,
          urlsSmall,
          altDescription,
          userName,
          userLinksHtml,
          createdAt,
          likes,
        },
      ];

    default:
      return state;
  }
}
