import { createSelector } from 'reselect';

const rootSelector = store => store.show;

export const getShowData = createSelector(
  rootSelector,
  showState => showState.data
);

export const getShowLoadingState = createSelector(
  rootSelector,
  showState => showState.isLoading
);

export const getShowInfo = createSelector(
  getShowData,
  showData => [
    {
      name: "Network: ",
      value: showData?.network?.name,
    },
    {
      name: "Schedule: ",
      value: `${showData?.schedule?.days?.join(', ')} at ${showData?.schedule?.time}`,
    },
    {
      name: "Status: ",
      value: showData?.status,
    },
    {
      name: "Show type: ",
      value: showData?.type,
    },
    {
      name: "Genres: ",
      value: showData?.genres?.join(' | '),
    },
    {
      name: "Official Site: ",
      value: showData?.officialSite,
    },
  ]
)

