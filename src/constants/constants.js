`use strict`;

export const BOX_WIDTH = 48;
export const FIELD_WIDTH = 50;
export const FIELD_HEIGHT = 5;
export const START_POSITION = 0;
export const CHARACTERS_NUMBER = 16;
export const INITIAL_STATE_LENGTH = 1;

export const SYMBOL_T = `T`;
export const SYMBOL_SPACE = ` `;
export const SYMBOL_SLASH = `/`;

export const ERROR = `Error occurred:`;
export const PAGE = `?page=`;
export const LIKE = `/like`;

export const SECRET_KEY = `3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk`;
export const ACCESS_KEY = `_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`;

export const AUTHORIZATION_CODE = `authorization_code`;
export const APPLICATION_JSON = `application/json`;
export const TOKEN = `TOKEN`;

export const SEPARATOR_CODE = `?code=`;
export const BEARER = `Bearer `;

export const USER_NAME = `USER_NAME`;
export const PROFILE_IMAGE = `PROFILE_IMAGE`;

export const GET = `GET`;
export const POST = `POST`;
export const DELETE = `DELETE`;

export const REDIRECT_URI = `http://localhost:3000/authPage`;
export const AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=public+write_likes`;
export const TOKEN_URL = `https://unsplash.com/oauth/token`;
export const USER_URL = `https://api.unsplash.com/me`;
export const UNSPLASH_PHOTOS_URL = `https://api.unsplash.com/photos`;
