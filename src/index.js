`use strict`;

import React from 'react';
import {render}  from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './styles/style.css';
import App from './containers/App.js';
import rootReducer from './reducers/reducer';
import {addPostPhoto} from './actions/actions';
import {SCROLL_HEIGHT} from './constants/constants.js';

const addPostPhotoEndOfScroll = () =>{
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight, 
        document.body.offsetHeight,	document.documentElement.offsetHeight, 
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if (scrollHeight - innerHeight === scrollY || scrollHeight - innerHeight === scrollY - SCROLL_HEIGHT) return store.dispatch( addPostPhoto() )
}

const $rootElem = document.querySelector(`.js-root`);

const store = createStore( rootReducer, applyMiddleware(thunk) );
store.dispatch( addPostPhoto() )

window.addEventListener('scroll', addPostPhotoEndOfScroll)

render( 
    <App 
        store={store}
    />, 
    $rootElem 
);