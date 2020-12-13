import { makeConfig } from 'utils/makeConfig';

const createGetDataReducerConfig = (actionTypes, initialState) => makeConfig({
  [actionTypes.STORE_DATA]: (state, payload) => ({ ...state, data: payload }),
  [actionTypes.SET_IS_LOADING]: (state, payload) => ({ ...state, isLoading: payload }),
  [actionTypes.CLEAR_DATA]: state => ({ ...state, data: initialState.data }),
  default: state => state,
});

const getReducerByConfig = (config, initialState) =>
  (state = initialState, { type, payload }) => {
    const handler = config(type);
    return handler(state, payload);
  };

export const createGetDataReducer = (actionTypes, initialState = {}) => {
  const handlersConfig = createGetDataReducerConfig(actionTypes, initialState);
  return getReducerByConfig(handlersConfig, initialState);
};
