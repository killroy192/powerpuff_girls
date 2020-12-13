import { useSelector } from 'react-redux';
import { Card } from 'molecules/card'
import showStyles from './show.module.scss'
import { useGetData } from 'hooks/useGetData';

import { actionCreators } from 'store/show/actions';
import { getShowData, getShowLoadingState, getShowInfo } from 'store/show/selectors';

function Show() {
  const showData = useSelector(getShowData);
  const showInfo = useSelector(getShowInfo);
  const isShowLoading = useSelector(getShowLoadingState);

  useGetData(actionCreators);

  if (isShowLoading) {
    return null
  }

  return (
    <>
      <div className={showStyles['show__img']}>
        <img 
          src={showData.image?.medium}
          alt={showData.name}
        />
      </div>
      <div className="d-flex flex-wrap justify-content-between pl-4">
        <div 
          className={showStyles['show__content']}
          dangerouslySetInnerHTML={{ __html: showData.summary }}
        />
        <div className={showStyles['show__card']}>
          <Card 
            title="Show Info"
            mainContent={showInfo}
            className="w-100"
          />
        </div>
      </div>
    </>
  );
}

export default Show;
