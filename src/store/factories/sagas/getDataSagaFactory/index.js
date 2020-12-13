import { takeLatest } from 'redux-saga/effects';

export const createWatcher = ({ catchEffect, actionType, execSaga }) =>
  function* watcher() {
    yield catchEffect(actionType, execSaga);
  };

export const createGetDataSaga = ({ callApi, save, startLoading, stopLoading }) =>
  function* getDataSaga({ payload }) {
    try {
      yield startLoading;
      // TODO: recheck do we really need 'cancel' flow, since for getting data we already use 'takeLatest'
      const [[response], cancel] = yield callApi(payload);
      if (!cancel) {
        yield save(response);
      }
      yield stopLoading;
    } catch (error) {
      console.error(error);
      yield stopLoading;
    }
  };

export const createGetDataSagaWatcher = (actionTypes, effects) => createWatcher(
  {
    actionType: actionTypes.GET_DATA,
    catchEffect: takeLatest,
    execSaga: createGetDataSaga(effects),
  },
);
