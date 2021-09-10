`use strict`;

import React from 'react';
import { render }  from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {addPostPhoto} from './actions/actions';

import './styles/style.css';
import App from './containers/App.js';
import reducers from './reducers/rootReducer';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
));

window.addEventListener('scroll', () =>{
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight, 
        document.body.offsetHeight,	document.documentElement.offsetHeight, 
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if (scrollHeight - innerHeight === scrollY) return store.dispatch( addPostPhoto() );
});

render( 
    <App store={store}/>, document.querySelector(`.js-root`)
);