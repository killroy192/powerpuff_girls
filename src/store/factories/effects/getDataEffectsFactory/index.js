import { retry, put, race, take, delay, all } from 'redux-saga/effects';

const retryConf = {
  interval: 800,
  times: 10,
};

const getDataEffects = ({
  apiCall,
  actionTypes,
  actionCreators,
}) => {
  const startLoading = put(actionCreators.setIsLoading(true));
  const stopLoading = put(actionCreators.setIsLoading(false));
  const save = data => put(actionCreators.storeData(data));

  const callApi = (payload = {}) => {
    const getDataEffect = all([
      retry(retryConf.times, retryConf.interval, apiCall, payload),
      // for show loading
      delay(2000)
    ])
    const cancelEffect = take(actionTypes.CANCEL_FETCHING);
    return race([
      getDataEffect,
      cancelEffect,
    ]);
  };

  return {
    callApi,
    save,
    startLoading,
    stopLoading,
  };
};

export const getSagaEffects = ({ apiCall, actionTypes, actionCreators }) =>
  ({
    ...getDataEffects({
      apiCall,
      actionTypes,
      actionCreators: {
        storeData: actionCreators.storeData,
        setIsLoading: actionCreators.setIsLoading,
      },
    }),
  });

