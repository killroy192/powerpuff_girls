import { useSelector } from 'react-redux';
import { EpisodesOrganism } from 'organisms/episodes';
import { getShowTitle, getEpisodesLoadingState } from 'store/episodes/selectors';
import { BaseTemplate } from 'templates/base';

function Episodes() {

  const isEpisodeLoading = useSelector(getEpisodesLoadingState);
  const showTitle = useSelector(getShowTitle)
  const pageTitle = showTitle ? `${showTitle} - Episode List` : '';
  return (
    <BaseTemplate
      pageTitle={pageTitle}
      isLoading={isEpisodeLoading}
    >
      <EpisodesOrganism />
    </BaseTemplate>
  );
}

export default Episodes;
