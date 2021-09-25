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
      return state.map((listPhoto) => {
        console.log(listPhoto);
        // if (listPhoto.id === id) {
        //   return
        //   {
        //     id: listPhoto.id,
        //     urlsRegular,
        //     urlsSmall,
        //     altDescription,
        //     userName,
        //     userLinksHtml,
        //     createdAt,
        //     likes,
        //     checked: !listPhoto.checked,
        //   };
        // }
      });

    default:
      return state;
  }
}
