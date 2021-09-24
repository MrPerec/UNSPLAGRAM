`use strict`;

import { createApi } from 'unsplash-js';
import { ACCESS_KEY, SECRET_KEY } from '../constants/constants.js';

const unsplashApi = createApi({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
});

export default unsplashApi;
