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
    likedByUser,
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
          likedByUser,
        },
      ];

    case LIKE_POST_PHOTO:
      // console.log(`it's the LIKE_POST_PHOTO reducer`);
      // console.log(id);

      return state.map((listPhoto) => {
        if (listPhoto.id === id) {
          // console.log(`
          // id "${listPhoto.id}",
          // urlsRegular "${listPhoto.urlsRegular}",
          // urlsSmall "${listPhoto.urlsSmall}",
          // altDescription "${listPhoto.altDescription}",
          // userName "${listPhoto.userName}",
          // userLinksHtml "${listPhoto.userLinksHtml}",
          // createdAt "${listPhoto.createdAt}",
          // likes "${listPhoto.likes}",
          // likedByUser "${!listPhoto.likedByUser}"
          //           `);
          return {
            id: listPhoto.id,
            urlsRegular: listPhoto.urlsRegular,
            urlsSmall: listPhoto.urlsSmall,
            altDescription: listPhoto.altDescription,
            userName: listPhoto.userName,
            userLinksHtml: listPhoto.userLinksHtml,
            createdAt: listPhoto.createdAt,
            likes: listPhoto.likes,
            likedByUser: !listPhoto.likedByUser,
            checked: true,
          };
        }
        return listPhoto;
      });

    default:
      return state;
  }
}
