`use strict`;

import { UNLIKE_PHOTO } from '../constants/types.js';

// const ACCESS_TOKEN = localStorage.getItem('token');

//UnLike photo
/* fetch(`https://api.unsplash.com/photos/zcbtpjgToUY/like`, {
          method: `DELETE`,
          headers: {
            Accept: `application/json`,
            'Content-Type': `application/json`,
            Authorization: `Bearer ` + ACCESS_TOKEN,
          },
        }); */

export default function unlikePhotoAction(id) {
  return {
    type: UNLIKE_PHOTO,
    id,
  };
}
