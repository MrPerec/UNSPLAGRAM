`use strict`;

import fetchtListPhotos from '../api/fetchtListPhotos';
import { ADD_POST_PHOTO } from '../types/types.js';

export default function addPostAction() {
  return function (dispatch) {
    fetchtListPhotos().then((response) => {
      response.forEach((item) => {
        dispatch({
          type: ADD_POST_PHOTO,
          urlsRegular: item.urls.regular,
          urlsSmall: item.urls.small,
          altDescription: item.alt_description,
          userName: item.user.name,
          userLinksHtml: item.user.links.html,
          createdAt: item.created_at,
          likes: item.likes,
          likedByUser: item.liked_by_user,
        });
      });
    });
  };
}
