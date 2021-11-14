`use strict`;

import { LIKE_PHOTO } from '../constants/types.js';

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

export default function likePhotoAction(id) {
  return {
    type: LIKE_PHOTO,
    id,
  };
}
