`use strict`;

import { LIKE_POST_PHOTO } from '../types/types.js';

export default function likePostPhoto(id) {
  return {
    type: LIKE_POST_PHOTO,
    id,
  };
}
