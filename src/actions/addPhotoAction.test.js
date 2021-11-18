`use strict`;

import requestPhotoList from '../api/requestPhotoList';
import { ADD_PHOTO } from '../constants/types.js';

export default function addPhotoAction() {
  return (dispatch) => {
    requestPhotoList().then((response) => {
      response.forEach((photo) => {
        dispatch({
          type: ADD_PHOTO,
          id: photo.id,
          urlsRegular: photo.urls.regular,
          urlsSmall: photo.urls.small,
          altDescription: photo.alt_description,
          userName: photo.user.name,
          userLinksHtml: photo.user.links.html,
          createdAt: photo.created_at,
          likes: photo.likes,
          likedByUser: photo.liked_by_user,
        });
      });
    });
  };
}
