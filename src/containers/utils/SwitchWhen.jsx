/* eslint-disable react/forbid-prop-types */

import PropTypes from 'prop-types';

const SwitchWhen = ({ render }) => render;

SwitchWhen.defaultProps = {
  render: null,
};

SwitchWhen.propTypes = {
  equals: PropTypes.any.isRequired,
  render: PropTypes.node,
};

export default SwitchWhen;
