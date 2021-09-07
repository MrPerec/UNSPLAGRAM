`use strict`;

import {ADD_POST_PHOTO, LIKE_POST, ADD_TITLE_PHOTO} from '../types/types.js';

export default function rootReducer(state = [{}], action){
	// console.log(`It is the reducer.js`);
	// console.log(state);
	// console.log(action);
	
	switch (action.type) {
		case ADD_POST_PHOTO:
			const {id, urlsSmall, altDescriptionPostPhoto, userNamePostPhoto, userLinksHtml, createdAt, likes} = action;
			
			return [
				...state,
				{
					id,
					urlsSmall,
					altDescriptionPostPhoto,
					userNamePostPhoto,
					userLinksHtml,
					createdAt,
					likes
				}
			];

		case ADD_TITLE_PHOTO:
			const {urlsFull} = action;

			return {
				urlsFull
			};

		/* case LIKE_POST:
			return state.map(postsList => {
				if (postsList.id === action.id) {
					return {
						// id: todo.id, 
						// name: todo.name, 
						// checked: !todo.checked
					}
				}
			return postsList;
		}) */

		default: return state;
	}
}