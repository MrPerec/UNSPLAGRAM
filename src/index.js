`use strict`;

import React from 'react';
import { render }  from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import './styles/style.css';
import App from './containers/App.js';
import reducers from './reducers/rootReducer';
// import {addPostPhoto} from './actions/actions';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
));

/* const onScroll = () =>{
    const height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight, 
        document.body.offsetHeight,	document.documentElement.offsetHeight, 
        document.body.clientHeight, document.documentElement.clientHeight
    );
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight;
    const position = scrolled + screenHeight;

    if (threshold <= position) return store.dispatch( addPostPhoto() );
}

function throttle(callee, timeout) {
    let timer = null

    return function perform(...args) {
        if (timer) return

        timer = setTimeout(() => {
        callee(...args)

        clearTimeout(timer)
        timer = null
        }, timeout)
    }
}
  
window.addEventListener( `scroll`, throttle(onScroll, 1000) )
window.addEventListener( `resize`, throttle(onScroll, 1000) ) */

render( 
    <App store={store}/>, document.querySelector(`.js-root`)
);