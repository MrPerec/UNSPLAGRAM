`use strict`;

// import unsplash from './unsplash';
import { createApi } from 'unsplash-js';
import { ACCESS_KEY, SECRET_KEY } from '../constants/constants.js';

const unsplash = createApi({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
});

let pageNumber = 1;

export default function requestListPhotos() {
  return unsplash.photos
    .list({
      page: pageNumber++,
      perPage: 10,
    })
    .then((result) => {
      if (result.errors) return alert(`error occurred: ${result.errors[0]}`);
      return result.response.results;
    });
}
