`use strict`;

import {
  ADD_POST_PHOTO,
  CHOOSE_POST,
  LIKE_POST,
  ADD_TITLE_PHOTO,
} from '../types/types.js';

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

    /* case CHOOSE_POST:
      return state.filter((post) => post.id === id); */

    default:
      return state;
  }
}
