`use strict`;

import { ADD_PHOTO, LIKE_PHOTO, LOGIN } from '../constants/types.js';
import {
  START_POSITION,
  CHARACTERS_NUMBER,
  SYMBOL_T,
  SYMBOL_SPACE,
} from '../constants/constants.js';
import getUuid from '../getUuid';

export default function rootReducer(
  state = [{}],
  {
    type,
    id,
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
    case ADD_PHOTO:
      const uuid = getUuid();
      createdAt = createdAt
        .substring(START_POSITION, CHARACTERS_NUMBER)
        .replace(SYMBOL_T, SYMBOL_SPACE);

      return [
        ...state,
        {
          id,
          uuid,
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

    case LIKE_PHOTO:
      return state.map((post) => {
        if (post.id === id) {
          return {
            id: post.id,
            uuid: post.uuid,
            urlsRegular: post.urlsRegular,
            urlsSmall: post.urlsSmall,
            altDescription: post.altDescription,
            userName: post.userName,
            userLinksHtml: post.userLinksHtml,
            createdAt: post.createdAt,
            likes: post.likes,
            likedByUser: !post.likedByUser,
          };
        }
        return post;
      });

    case LOGIN:
      return { ...state, login: true };
    // return;

    default:
      return state;
  }
}
