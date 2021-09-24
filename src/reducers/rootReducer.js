`use strict`;

import { ADD_POST_PHOTO, LIKE_POST_PHOTO } from '../types/types.js';

export default function reducers(
  state = [{}],
  {
    type,
    id,
    urlsRegular,
    urlsSmall,
    altDescription,
    userName,
    userLinksHtml,
    createdAt,
    likes,
  }
) {
  switch (type) {
    case ADD_POST_PHOTO:
      return [
        ...state,
        {
          id,
          urlsRegular,
          urlsSmall,
          altDescription,
          userName,
          userLinksHtml,
          createdAt,
          likes,
        },
      ];

    case LIKE_POST_PHOTO:
      return state.map((postList) => {
        if (postList.id === action.id) {
          return {
            id: todo.id,
            name: todo.name,
            checked: !todo.checked,
          };
        }
        return todo;
      });

    default:
      return state;
  }
}
