`use strict`;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './containers/App.js';
import reducers from './reducers/rootReducer';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Router>
    <App store={store} />
  </Router>,
  document.querySelector(`.js-root`)
);
