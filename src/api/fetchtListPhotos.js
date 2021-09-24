`use strict`;

import unsplashApi from './unsplashApi';

let pageNumber = 1;

export default function fetchtListPhotos() {
  return unsplashApi.photos
    .list({
      page: pageNumber++,
      perPage: 10,
    })
    .then((result) => {
      if (result.errors) return alert(`error occurred: ${result.errors[0]}`);
      return result.response.results;
    });
}
