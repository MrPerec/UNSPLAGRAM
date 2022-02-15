`use strict`;

import {
  ADD_PHOTO,
  LIKE_PHOTO,
  REMOVE_LIKE_PHOTO,
} from '../constants/types.js';

export default function photoReducer(
  state = [],
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
      return [
        ...state,
        {
          id,
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
            id,
            urlsRegular: photo.urlsRegular,
            urlsSmall: photo.urlsSmall,
            altDescription: photo.altDescription,
            userName: photo.userName,
            userLinksHtml: photo.userLinksHtml,
            createdAt: photo.createdAt,
            likes,
            likedByUser,
          };
        }
        return photo;
      });

    case REMOVE_LIKE_PHOTO:
      return state.map((photo) => {
        if (photo.id === id) {
          return {
            id,
            urlsRegular: photo.urlsRegular,
            urlsSmall: photo.urlsSmall,
            altDescription: photo.altDescription,
            userName: photo.userName,
            userLinksHtml: photo.userLinksHtml,
            createdAt: photo.createdAt,
            likes,
            likedByUser,
          };
        }
        return photo;
      });

    default:
      return state;
  }
}
