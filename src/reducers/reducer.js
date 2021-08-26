`use strict`;

import {ADD_POST_PHOTO} from '../types/types.js';

// export default function rootReducer(state = initialState, action){
export default function rootReducer(state = [{}], action){
	// console.log(`It is the reducer.js`);
	// console.log(state);
	// console.log(action);
	const {id, urlsSmall, alt_description, userName, userLinksHtml, created_at, likes} = action;

	switch (action.type) {
		case ADD_POST_PHOTO:
			return [
				...state,
				{
					id,
					urlsSmall,
					alt_description,
					userName,
					userLinksHtml,
					created_at,
					likes
				}
			]
		default: return state;
	}
}