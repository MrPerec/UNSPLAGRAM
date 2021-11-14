`use strict`;

import requestPhotoList from '../api/requestPhotoList';
import { ADD_PHOTO } from '../constants/types.js';

export default function addPhotoAction() {
  return (dispatch) => {
    requestPhotoList().then((response) => {
      response.forEach((item) => {
        dispatch({
          type: ADD_PHOTO,
          id: item.id,
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
