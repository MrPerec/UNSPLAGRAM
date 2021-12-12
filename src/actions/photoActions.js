`use strict`;

import { createApi } from 'unsplash-js';
import getUuid from '../utils/getUuid';
import { ADD_PHOTO, LIKE_PHOTO, UNLIKE_PHOTO } from '../constants/types.js';
import {
  ACCESS_KEY,
  SECRET_KEY,
  START_POSITION,
  CHARACTERS_NUMBER,
  SYMBOL_T,
  SYMBOL_SPACE,
  POST,
  DELETE,
  APPLICATION_JSON,
  BEARER,
  TOKEN,
} from '../constants/constants.js';

const unsplash = createApi({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
});

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

const likePhoto = ({ photo }) => {
  return {
    type: LIKE_PHOTO,
    id: photo.id,
    likedByUser: photo.liked_by_user,
  };
};

const unLikePhoto = ({ photo }) => {
  return {
    type: UNLIKE_PHOTO,
    id: photo.id,
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

export function likePhotoAction(photoId) {
  const token = localStorage.getItem(TOKEN);

  return (dispatch) => {
    fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
      method: POST,
      headers: {
        Accept: APPLICATION_JSON,
        'Content-Type': APPLICATION_JSON,
        Authorization: BEARER + token,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(likePhoto(data)));
  };
}

export function unLikePhotoAction(photoId) {
  const token = localStorage.getItem(TOKEN);

  return (dispatch) => {
    fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
      method: DELETE,
      headers: {
        Accept: APPLICATION_JSON,
        'Content-Type': APPLICATION_JSON,
        Authorization: BEARER + token,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(unLikePhoto(data)));
  };
}
