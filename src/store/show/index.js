import { fetchShow } from 'core/api';
import { createGetDataReducer } from 'store/factories/reducers/getDataReducerFactory';
import { createGetDataSagaWatcher } from 'store/factories/sagas/getDataSagaFactory';
import { getSagaEffects } from 'store/factories/effects/getDataEffectsFactory';
import { actionCreators, actionTypes } from './actions';

const INIT_STATE = {
  data: {},
  isLoading: true,
};

export const reducer = createGetDataReducer(actionTypes, INIT_STATE);
export const saga = createGetDataSagaWatcher(
  actionTypes,
  getSagaEffects({ apiCall: fetchShow, actionTypes, actionCreators }),
);