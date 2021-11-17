`use strict`;

import { LIKE_PHOTO } from '../constants/types.js';

export default function likePhotoReducer(state = [{}], { type, id }) {
  switch (type) {
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

    default:
      return state;
  }
}
