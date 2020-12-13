import { useSelector } from 'react-redux';
import { getShowData, getShowLoadingState } from 'store/show/selectors';
import { ShowOrganism } from 'organisms/show';
import { BaseTemplate } from 'templates/base';

function ShowPage() {
  const showData = useSelector(getShowData);
  const isShowLoading = useSelector(getShowLoadingState);
  return (
    <BaseTemplate
      pageTitle={showData?.name}
      isLoading={isShowLoading}
    >
      <ShowOrganism />
    </BaseTemplate>
  );
}

export default ShowPage;
