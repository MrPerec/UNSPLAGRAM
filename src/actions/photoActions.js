`use strict`;

import { createApi } from 'unsplash-js';
import { ADD_PHOTO, LIKE_PHOTO } from '../constants/types.js';
import {
  ACCESS_KEY,
  SECRET_KEY,
  START_POSITION,
  CHARACTERS_NUMBER,
  SYMBOL_T,
  SYMBOL_SPACE,
} from '../constants/constants.js';

const unsplash = createApi({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
});

const getUuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const addPhoto = (photo) => {
  const uuid = getUuid();
  const createdAt = photo.created_at
    .substring(START_POSITION, CHARACTERS_NUMBER)
    .replace(SYMBOL_T, SYMBOL_SPACE);

  return {
    type: ADD_PHOTO,
    id: photo.id,
    uuid,
    urlsRegular: photo.urls.regular,
    urlsSmall: photo.urls.small,
    altDescription: photo.alt_description,
    userName: photo.user.name,
    userLinksHtml: photo.user.links.html,
    createdAt,
    likes: photo.likes,
    likedByUser: photo.liked_by_user,
  };
};

let pageNumber = 1;

export function addPhotoAction() {
  return (dispatch) => {
    unsplash.photos
      .list({
        page: pageNumber++,
        perPage: 10,
      })
      .then((result) => {
        if (result.errors) return alert(`error occurred: ${result.errors[0]}`);
        return result.response.results.forEach((item) => {
          dispatch(addPhoto(item));
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
