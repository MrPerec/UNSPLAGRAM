`use strict`;

import { LIKE_PHOTO } from '../constants/types.js';

export default function likePhotoReducer(state = [{}], { type, id }) {
  switch (type) {
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
