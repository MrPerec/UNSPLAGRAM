`use strict`;

import { createApi } from 'unsplash-js';
import { ACCESS_KEY, SECRET_KEY } from '../constants/constants.js';

const LIKE_URL = `https://api.unsplash.com/photos/?client_id=_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc&id=6uneKLGrJPs/like`;

const unsplash = createApi({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
});

export default unsplash;

// router.push({
//   pathname: 'https://unsplash.com/oauth/authorize',
//   query: {
//     redirect_uri: 'http://localhost:9000/',
//     client_id: 'MY_CLIENT_ID',
//     response_type: 'code',
//     scope:
//       'public+read_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections',
//   },
// });
