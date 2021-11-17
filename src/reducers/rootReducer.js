import { combineReducers } from 'redux';
import addPhotoReducer from './addPhotoReducer';
import likePhotoReducer from './likePhotoReducer';

export default combineReducers({ addPhotoReducer, likePhotoReducer });
