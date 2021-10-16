`use strict`;

import unsplash from './unsplash';

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
