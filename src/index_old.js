`use strict`;

import './styles/style.css';
import { createApi } from 'unsplash-js';

const COUNT_PHOTO = 10;

const $contentElem = document.querySelector(`.js-main`);

const unsplashApi = createApi({
	accessKey: '_JCTLXIriKQH3zfw4IPJa7c4uUf-KBTJbCqNHGAvXFc',
	secret: `3bb-ZjMm_DeThkQSR9975k1KQPg56J_xUk5SpU1X6Sk`,
});

function getResponse(api){
	return api.photos.list({ 
		page: 1, 
		perPage: COUNT_PHOTO 
	}).then(result => {
		if (result.errors) return alert(`error occurred: ${result.errors[0]}`);
		// console.log(result.response);
		return result.response;
	});
}

function createNewElem(name, attributes, text){
	const elem = document.createElement(name);
	if (typeof attributes == 'object' ) {
	  for ( let i in attributes ) elem.setAttribute(i, attributes[i]);
	}
	elem.textContent = text;
	return elem;
}

function renderPhotos(getPhoto, countPhoto){
	for (let i = 0; i < countPhoto; i++){
		getPhoto(unsplashApi).then( response => {
			// console.log(response.results[i].urls.small);
			const $newImgElem = createNewElem(
				`img`, 
				{
					class:`img`, 
					src: response.results[i].urls.small, 
					alt_description: response.results[i].alt_description_description
				}
			);
			const $newAuthorNameElem = createNewElem(
				`div`, 
				{
					class:`div`
				},
				response.results[i].user.name
			);
			const $newAuthorProfileLinkElem = createNewElem(
				`a`, 
				{
					class:`a`,
					href: response.results[i].links.html,
					target:`_blank`
				},
				`Link to the author profile on unsplash`
			);
			const $newPublishDateElem = createNewElem(
				`time`, 
				{
					class:`time`,
					datetime: `response.results[i].created_at`
				},
				`Published on ${response.results[i].created_at}`
			);
			const $newLikesCountElem = createNewElem(
				`div`, 
				{
					class:`div`
				},
				`likes count ${response.results[i].likes}`
			);

			const $newPostContainerElem = createNewElem(`div`, {class:`div post_container`});
			const $newDivElem = createNewElem(`div`, {class:`div`});

			$contentElem.append($newPostContainerElem);
			$newPostContainerElem.append($newImgElem);
			$newPostContainerElem.append($newAuthorNameElem);
			$newPostContainerElem.append($newAuthorProfileLinkElem);
			$newPostContainerElem.append($newDivElem);
			$newDivElem.append($newPublishDateElem);
			$newPostContainerElem.append($newLikesCountElem);
			
		});
	}
	const $newButton = createNewElem(`button`, `Загрузить фото`, {class:`button js-button`});
	$contentElem.append($newButton);
	// return response;
}

renderPhotos(getResponse, COUNT_PHOTO)