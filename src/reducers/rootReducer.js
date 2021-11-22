import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import loginReducer from './loginReducer';

export default combineReducers({ photoReducer, loginReducer });
