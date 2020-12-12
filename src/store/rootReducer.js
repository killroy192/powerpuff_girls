import { combineReducers } from 'redux';

const INIT_STATE = 'data';

const identity = (state = INIT_STATE, action) => state;

export const rootReducer = combineReducers({
  identity
});
