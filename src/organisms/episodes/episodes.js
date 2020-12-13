import { useSelector } from 'react-redux';
import { useGetData } from 'hooks/useGetData';

import { actionCreators } from 'store/episodes/actions';
import { getEpisodesLoadingState, getEpisodesGroupedBySeason } from 'store/episodes/selectors';

function Episodes() {

  const groupedEpisodes = useSelector(getEpisodesGroupedBySeason);
  const isEpisodeLoading = useSelector(getEpisodesLoadingState);

  useGetData(actionCreators);

  if (isEpisodeLoading) {
    return null
  }

  return (
    <>
      {groupedEpisodes.map(
        ([season, seasonEpisodes]) => (
          <ul className="list-group list-group-flush pb-2" key={season}>
            <li className="list-group-item active py-4">{`Season - ${season}`}</li>
            {
              seasonEpisodes.map(
                seasonEpisode => (
                  <li className="list-group-item d-flex" key={seasonEpisode.name}>
                    <span className="text-info d-block pr-3">{seasonEpisode.number}</span>
                    <span className="text-secondary">{seasonEpisode.name}</span>
                  </li>
                )
              )
            }
          </ul>
        )
      )}
    </>
  );
}

export default Episodes;
