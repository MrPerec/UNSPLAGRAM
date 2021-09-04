`use strict`;

import {ADD_POST, LIKE_POST, ADD_TITLE_PHOTO} from '../types/types.js';

// export default function rootReducer(state = initialState, action){
export default function rootReducer(state = [{}], action){
	// console.log(`It is the reducer.js`);
	// console.log(state);
	// console.log(action);
	const {id, urlsSmall, alt_description, userName, userLinksHtml, created_at, likes} = action;

	switch (action.type) {
		case ADD_POST:
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
			];
		// case LIKE_POST:
		// 	return state.map(postsList => {
		// 		if (postsList.id === action.id) {
		// 			return {
		// 				// id: todo.id, 
		// 				// name: todo.name, 
		// 				// checked: !todo.checked
		// 			}
		// 		}
		// 		return postsList;
		// 	})
		case ADD_TITLE_PHOTO:
			return titlePhoto;

		default: return state;
	}
}