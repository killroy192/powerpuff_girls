import { memo } from 'react';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import { navPageConfig } from 'core/constants/pageConfig';
import { NavPropTypes } from './nav.props';

const Nav = ({ className }) => (
  <nav className={classNames('nav nav-pills', className)}>
    {
      navPageConfig.map(
        ({ path, name, disabled }) => (
          <NavLink 
            to={path} 
            className={classNames('nav-link', { disabled })}
            activeClassName="active"
            key={path}
            exact
          >
            {name}
          </NavLink>
        )
      )
    }
  </nav>
);

Nav.defaultProps = NavPropTypes;

export default memo(Nav);