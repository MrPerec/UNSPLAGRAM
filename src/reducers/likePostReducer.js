`use strict`;

import { LIKE_POST_PHOTO } from '../types/types.js';

export default function likePostReducer(state = [{}], { type, id }) {
  switch (type) {
    case LIKE_POST_PHOTO:
      return state.map((listPhoto) => {
        if (listPhoto.id === id) {
          return {
            id: listPhoto.id,
            urlsRegular: listPhoto.urlsRegular,
            urlsSmall: listPhoto.urlsSmall,
            altDescription: listPhoto.altDescription,
            userName: listPhoto.userName,
            userLinksHtml: listPhoto.userLinksHtml,
            createdAt: listPhoto.createdAt,
            likes: listPhoto.likes,
            likedByUser: !listPhoto.likedByUser,
          };
        }
        return listPhoto;
      });

    default:
      return state;
  }
}
