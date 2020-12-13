import { Nav } from 'molecules/nav'
import classNames from 'classnames';
import templateStyles from './base.module.scss';
import Skeleton from 'react-loading-skeleton';
import { BasePropTypes, BaseDefaultProps } from './base.props';

function BaseTemplate({ isLoading, pageTitle, children }) {
  return (
    <>
      <div className={classNames({ 'invisible': !isLoading })}>
        <Skeleton/>
      </div>
      <header className="h1 text-center pt-4 px-1 pb-0">
        {isLoading && !pageTitle ? 'Loading...' : pageTitle}
      </header>
      <div className="d-flex justify-content-center px-1 py-2">
        <Nav className="d-inline-flex"/>
      </div>
      <main className={classNames("d-flex p-5 justify-content-between m-auto", templateStyles['base-template'])}>
        {children}
      </main>
    </>
  );
}

BaseTemplate.propTypes = BasePropTypes;
BaseTemplate.defaultProps = BaseDefaultProps;

export default BaseTemplate;
