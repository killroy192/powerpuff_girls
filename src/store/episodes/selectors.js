import { createSelector } from 'reselect';

const rootSelector = store => store.episodes;

export const getEpisodesData = createSelector(
  rootSelector,
  episodesState => episodesState.data
);

export const getEpisodesLoadingState = createSelector(
  rootSelector,
  episodesState => episodesState.isLoading
);

export const getShowTitle = createSelector(
  getEpisodesData,
  episodesData => episodesData.name
);

const getEpisodes = createSelector(
  getEpisodesData,
  episodesData => episodesData?._embedded?.episodes || []
)

const groupEpisodes = episodesData => episodesData
  .reduce(
    (acc, episode) => {
      const { season } = episode;
      return {
        ...acc,
        [season]: acc[season] ? [...acc[season], episode]: [episode]
      }
    },
    {}
  )

export const getEpisodesGroupedBySeason = createSelector(
  getEpisodes,
  episodesData => Object
    .entries(
      groupEpisodes(episodesData)
    ).sort(
      ([season], [nextSeason]) => season - nextSeason
    )
)

