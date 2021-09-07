`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import DisplayTitlePhoto from '../components/DisplayTitlePhoto.js';
import DisplayListPostPhoto from '../components/DisplayListPostPhoto.js';
import {addPostPhoto} from '../actions/actions';

/* export default function App(prop){
	console.log(prop) */
export default function App( {postPhoto, addPostPhoto} ){
	// console.log(`It is App.js`);
	// console.log(postPhoto);
	// console.log(addPostPhoto);

	return(
		<div>
			<DisplayTitlePhoto
				// titlePhoto={titlePhoto}
			/>
			<DisplayListPostPhoto
				postPhoto={postPhoto}
				addPostPhoto={addPostPhoto}
			/>		
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		postPhoto: state,
		// titlePhoto: state
	}
}

const mapDispatchToProps = (dispatch) => {
	// console.log(dispatch);
	return{
		addPostPhoto: (state) => dispatch( addPostPhoto(state) )
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);