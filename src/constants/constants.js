`use strict`;

export const BOX_WIDTH = 48;
export const FIELD_WIDTH = 50;
export const FIELD_HEIGHT = 5;
export const ZERO = 0;
export const CHARACTERS_NUMBER = 16;
export const VERTICAL_OFFSET = -100;
export const TIMER = 5000;
export const MARGIN_BOTTOM = 81;

export const SYMBOL_T = `T`;
export const SYMBOL_SPACE = ` `;

export const ERROR = `Error occurred:`;
export const PAGE = `?page=`;
export const LIKE = `/like`;

export const SECRET_KEY = `3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk`;
export const ACCESS_KEY = `_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc`;

export const AUTHORIZATION_CODE = `authorization_code`;
export const APPLICATION_JSON = `application/json`;
export const TOKEN = `TOKEN`;

export const SEPARATOR_CODE = `?code=`;
export const CLIENT_ID = `?client_id=${ACCESS_KEY}&page=`;
export const BEARER = `Bearer `;

export const USER_NAME = `USER_NAME`;
export const PROFILE_IMAGE = `PROFILE_IMAGE`;

export const GET = `GET`;
export const POST = `POST`;
export const DELETE = `DELETE`;

export const USER_URL = `https://api.unsplash.com/me`;
export const TOKEN_URL = `https://unsplash.com/oauth/token`;
export const PHOTOS_URL = `https://api.unsplash.com/photos/`;
export const REDIRECT_URI = `https://unsplagram.website/authPage`;
export const AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=public+write_likes+read_user`;
