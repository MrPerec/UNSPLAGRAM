import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import authReducer from './authReducer';

export default combineReducers({
  photoState: photoReducer,
  authState: authReducer,
});
