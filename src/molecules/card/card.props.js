import PropTypes from 'prop-types';

export const CardPropTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  mainContent: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

export const CardDefaultProps = {
  mainContent: [],
}
