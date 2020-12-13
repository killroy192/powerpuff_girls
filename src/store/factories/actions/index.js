import { createActionTypes } from './actionTypesFactory';
import { createActions } from './actionCreatorsFactory';

export const getBaseActions = storeKey => {
  const actionTypes = createActionTypes(storeKey);
  const actionCreators = createActions(actionTypes);

  return {
    actionTypes,
    actionCreators,
  };
};
