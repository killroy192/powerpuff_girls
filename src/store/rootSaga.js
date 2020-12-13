import { all } from 'redux-saga/effects';
import { saga as showSaga } from './show'
import { saga as episodesSaga } from './episodes'

export function* rootSaga() {
  yield all([
    showSaga(),
    episodesSaga(),
  ]);
}
