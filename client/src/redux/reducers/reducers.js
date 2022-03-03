import { combineReducers } from 'redux';
import authReducers from './auth';
import checkReducers from './check';
import { profileReducers } from './profile';

export const reducers = combineReducers({ profile:profileReducers, auth:authReducers,check:checkReducers });