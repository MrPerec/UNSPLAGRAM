`use strict`;

import React from 'react';
import ReactDOM  from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './styles/style.css';
import App from './containers/App.js';
import rootReducer from './reducers';
import {addPostPhoto} from './actions';
/*import {getPosts} from './storage/storage.js';

const initialState = getPosts();

const store = createStore( rootReducer, initialState, applyMiddleware(thunk) );*/
const store = createStore( rootReducer, applyMiddleware(thunk) );
store.dispatch( addPostPhoto() )

// store.subscribe( () => console.log( store.getState() ));
// console.log(`It is index.js`);
// console.log(store.getState())

ReactDOM.render( <App store={store} />, document.querySelector(`.js-root`) );