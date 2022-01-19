`use strict`;

import getUuid from '../utils/getUuid';
import requestFetch from '../utils/requestFetch';
import { ADD_PHOTO, LIKE_PHOTO, UNLIKE_PHOTO } from '../constants/types.js';
import {
  START_POSITION,
  CHARACTERS_NUMBER,
  SYMBOL_T,
  SYMBOL_SPACE,
  POST,
  DELETE,
  GET,
  PHOTOS_URL,
  NO_AUTH_PHOTOS_URL,
  PAGE,
  LIKE,
} from '../constants/constants.js';

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
    likes: photo.likes,
  };
};

const unLikePhoto = ({ photo }) => {
  return {
    type: UNLIKE_PHOTO,
    id: photo.id,
    likedByUser: photo.liked_by_user,
    likes: photo.likes,
  };
};

let pageNumber = 1;

export function addNoAuthPhotoAction() {
  const url = `${NO_AUTH_PHOTOS_URL}${pageNumber++}`;
  return (dispatch) => {
    requestFetch(url, GET).then((response) =>
      response.forEach((photo) => dispatch(addPhoto(photo)))
    );
  };
}

export function addAuthPhotoAction() {
  const url = `${PHOTOS_URL}${PAGE}${pageNumber++}`;
  return (dispatch) => {
    requestFetch(url, GET).then((response) =>
      response.forEach((photo) => dispatch(addPhoto(photo)))
    );
  };
}

export function likePhotoAction(photoId) {
  const url = `${PHOTOS_URL}${photoId}${LIKE}`;
  return (dispatch) => {
    requestFetch(url, POST).then((response) => dispatch(likePhoto(response)));
  };
}

export function unLikePhotoAction(photoId) {
  const url = `${PHOTOS_URL}${photoId}${LIKE}`;
  return (dispatch) => {
    requestFetch(url, DELETE).then((response) =>
      dispatch(unLikePhoto(response))
    );
  };
}
