import PropTypes from 'prop-types';

export const BasePropTypes = {
  isLoading: PropTypes.bool, 
  pageTitle: PropTypes.string, 
  children: PropTypes.node,
};

export const BaseDefaultProps = {
  isLoading: false,
}
