`use strict`;

import { ADD_PHOTO, LIKE_PHOTO } from '../constants/types.js';
import {
  START_POSITION,
  CHARACTERS_NUMBER,
  SYMBOL_T,
  SYMBOL_SPACE,
} from '../constants/constants.js';
import getUuid from '../getUuid';

export default function addPhotoReducer(
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
      return state.map((photo) => {
        if (photo.id === id) {
          return {
            id: photo.id,
            uuid: photo.uuid,
            urlsRegular: photo.urlsRegular,
            urlsSmall: photo.urlsSmall,
            altDescription: photo.altDescription,
            userName: photo.userName,
            userLinksHtml: photo.userLinksHtml,
            createdAt: photo.createdAt,
            likes: photo.likes,
            likedByUser: !photo.likedByUser,
          };
        }
        return photo;
      });

    default:
      return state;
  }
}
