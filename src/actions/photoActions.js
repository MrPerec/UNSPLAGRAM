`use strict`;

import requestPhotoList from '../api/requestPhotoList';
import { ADD_PHOTO, LIKE_PHOTO } from '../constants/types.js';

export function addPhotoAction() {
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

export function likePhotoAction(id) {
  // const ACCESS_TOKEN = localStorage.getItem('token');

  //Like photo
  /* fetch(`https://api.unsplash.com/photos/zcbtpjgToUY/like`, {
            method: `POST`,
            headers: {
              Accept: `application/json`,
              'Content-Type': `application/json`,
              Authorization: `Bearer ` + ACCESS_TOKEN,
            },
          }); */
  return {
    type: LIKE_PHOTO,
    id,
  };
}
