import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import { navPageConfig } from 'core/constants/pageConfig';


export const Nav = ({ className }) => (
  <nav className={classNames('nav nav-pills', className)}>
    {
      navPageConfig.map(
        ({ path, name, disabled }) => (
          <NavLink 
            to={path} 
            className={classNames('nav-link', { disabled })}
            activeClassName="active"
            key={path}
          >
            {name}
          </NavLink>
        )
      )
    }
  </nav>
)