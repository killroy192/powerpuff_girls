export function createActionObject(type, payload) {
  if (!type) {
    console.error(`Can't create action of type ${type}`);
    return;
  }

  const action = { type };
  if (payload !== undefined) {
    action.payload = payload;
  }
  return action;
}
export const createAction = type => payload => createActionObject(type, payload);
// To create multiple actions simultaneously
export const createActions = actions => actions.map(createAction);
