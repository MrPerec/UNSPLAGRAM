`use strict`;

import {ADD_POST_PHOTO, LIKE_POST, ADD_TITLE_PHOTO} from '../types/types.js';

export default function rootReducer(state = [{}], action){
	switch (action.type) {
		
		case ADD_POST_PHOTO:
			const {id, urlsSmall, altDescription, userName, userLinksHtml, createdAt, likes} = action;
			return [
				...state,
				{
					id,
					urlsSmall,
					altDescription,
					userName,
					userLinksHtml,
					createdAt,
					likes
				}
			];

		default: return state;
	}
}