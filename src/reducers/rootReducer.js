import { combineReducers } from 'redux';
import photoReducers from './photoReducers';
import loginReducer from './loginReducer';

export default combineReducers({ photoReducers, loginReducer });
