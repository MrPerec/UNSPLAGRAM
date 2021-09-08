`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import DisplayListPostPhoto from '../components/DisplayListPostPhoto.js';
import {addPostPhoto} from '../actions/actions';

export default function App( {postPhoto, addPostPhoto} ){
	return(
		<DisplayListPostPhoto
			postPhoto={postPhoto}
			addPostPhoto={addPostPhoto}
		/>
	)
}

const mapStateToProps = (state) => {
	return {
		postPhoto: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addPostPhoto: (state) => dispatch( addPostPhoto(state) )
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);