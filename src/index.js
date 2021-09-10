`use strict`;

import React from 'react';
import { render }  from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './styles/style.css';
import App from './containers/App.js';
import reducers from './reducers/rootReducer';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
));

render( 
    <App store={store}/>, document.querySelector(`.js-root`)
);