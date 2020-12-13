import { combineReducers } from 'redux';
import { reducer as show } from './show';
import { reducer as episodes } from './episodes'

export const rootReducer = combineReducers({
  show,
  episodes,
});
