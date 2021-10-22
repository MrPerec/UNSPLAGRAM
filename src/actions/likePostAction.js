`use strict`;

import { LIKE_POST_PHOTO } from '../constants/types.js';

export default function likePostAction(id) {
  return {
    type: LIKE_POST_PHOTO,
    id,
  };
}
