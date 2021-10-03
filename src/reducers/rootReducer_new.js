import addPostReducer from './addPostReducer';
import likePostReducer from './likePostReducer';
import { combineReducers } from 'redux';

export default combineReducers({ addPostReducer, likePostReducer });
