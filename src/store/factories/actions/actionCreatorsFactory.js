import { createAction } from 'store/utils/createAction';

export const createActions = actionTypes => {
  const {
    GET_DATA,
    STORE_DATA,
    SET_IS_LOADING,
    CLEAR_DATA,
    CANCEL_FETCHING,
  } = actionTypes;

  return {
    getData: createAction(GET_DATA),
    cancelFetching: createAction(CANCEL_FETCHING),
    storeData: createAction(STORE_DATA),
    setIsLoading: createAction(SET_IS_LOADING),
    clearData: createAction(CLEAR_DATA),
  };
};
