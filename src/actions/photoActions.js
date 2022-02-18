`use strict`;

import requestFetch from '../utils/requestFetch';
import {
  ADD_PHOTO,
  LIKE_PHOTO,
  REMOVE_LIKE_PHOTO,
} from '../constants/types.js';

import {
  INDEX_START_DATE,
  INDEX_END_DATE,
  SYMBOL_T,
  SYMBOL_SPACE,
  POST,
  DELETE,
  GET,
  PHOTOS_URL,
  CLIENT_ID,
  PAGE,
  LIKE,
} from '../constants/constants.js';

const addPhoto = (photo) => {
  const createdAt = photo.created_at
    .substring(INDEX_START_DATE, INDEX_END_DATE)
    .replace(SYMBOL_T, SYMBOL_SPACE);

  return {
    type: ADD_PHOTO,
    id: photo.id,
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

const removeLikePhoto = ({ photo }) => {
  return {
    type: REMOVE_LIKE_PHOTO,
    id: photo.id,
    likedByUser: photo.liked_by_user,
    likes: photo.likes,
  };
};

let pageNumber = 1;

export function addNoAuthPhotoAction() {
  const url = `${PHOTOS_URL}${CLIENT_ID}${pageNumber++}`;
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

export function addPhotoByIdAction(photoId) {
  const url = `${PHOTOS_URL}${photoId}${CLIENT_ID}`;
  return (dispatch) => {
    requestFetch(url, GET).then((response) => dispatch(addPhoto(response)));
  };
}

export function likePhotoAction(photoId) {
  const url = `${PHOTOS_URL}${photoId}${LIKE}`;
  return (dispatch) => {
    requestFetch(url, POST).then((response) => dispatch(likePhoto(response)));
  };
}

export function removeLikePhotoAction(photoId) {
  const url = `${PHOTOS_URL}${photoId}${LIKE}`;
  return (dispatch) => {
    requestFetch(url, DELETE).then((response) =>
      dispatch(removeLikePhoto(response))
    );
  };
}
