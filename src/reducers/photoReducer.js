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
    uuid,
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
      console.log(state);
      /* const newState = state.map((photo) => {
        if (photo.id == id) {
          return {
            id,
            uuid: null,
            urlsRegular: null,
            urlsSmall: null,
            altDescription: null,
            userName: null,
            userLinksHtml: null,
            createdAt: null,
            likes: null,
            likedByUser: null,
          };
        }
        return photo;
      });
      console.log(newState); */
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
            id,
            uuid: photo.uuid,
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
            uuid: photo.uuid,
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
