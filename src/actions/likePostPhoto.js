`use strict`;

import { LIKE_POST_PHOTO } from '../types/types.js';

export default function likePostPhoto(id) {
  dispatch({
    type: LIKE_POST_PHOTO,
    id,
  });
}
