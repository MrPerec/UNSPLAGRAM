`use strict`;

import {createApi} from 'unsplash-js';
import {ADD_POST_PHOTO, LIKE_POST, ADD_TITLE_PHOTO} from '../types/types.js';
import {START_POSITION, LENGTH, SYMBOL_T, SYMBOL_SPACE, FIRST_ITEM_OF_COLLECTION} from '../constants/constants.js';

const getUuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));

const unsplashApi = createApi({
	accessKey: '_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc',
	secret: `3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk`,
});

let pageNumber = 1;

const requestListPhoto = api => {
	return api.photos.list({page: pageNumber++, perPage: 10}).then(result => {
		if (result.errors) return alert(`error occurred: ${result.errors[0]}`);
		return result.response.results;
	});
}

export function addPostPhoto() {
	return function(dispatch){
		requestListPhoto(unsplashApi).then(response => {
			response.forEach( (item) =>{
				const uuid = getUuid();
				item.created_at = item.created_at.substr(START_POSITION, LENGTH).replace(SYMBOL_T, SYMBOL_SPACE);
				
				dispatch({ 
					type: ADD_POST_PHOTO,
					id: uuid,
					urlsSmall: item.urls.small,
					alt_description: item.alt_description,
					userName: item.user.name,
					userLinksHtml: item.user.links.html,
					created_at: item.created_at,
					likes: item.likes
				 })
			})
		})
	}
}

/* const requestTitlePhoto = api => {
	return api.collections.getPhotos({ 
		collectionId: `827743`,
		orientation: `landscape`
	}).then(result => {
		if (result.errors) return alert(`error occurred: ${result.errors[0]}`);
		// console.log(result.response.results[FIRST_ITEM_OF_COLLECTION]);
		return result.response.results[FIRST_ITEM_OF_COLLECTION];
	});
};

requestTitlePhoto(unsplashApi);

export function addTheTitlePhoto(state){
	return function (dispatch){
		requestTitlePhoto(unsplashApi).then(response => {
			console.log(response);
			dispatch({
				type: ADD_TITLE_PHOTO,
				titlePhoto: response.urls.full 
			})
		})
	}
} */

/* export function likePost(id){
	dispatch({
		type: LIKE_POST,
		id
	})
} */