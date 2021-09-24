`use strict`;

import { LIKE_POST_PHOTO } from '../types/types.js';

export function likePostPhoto() {
  dispatch({
    type: LIKE_POST_PHOTO,
  });
}
