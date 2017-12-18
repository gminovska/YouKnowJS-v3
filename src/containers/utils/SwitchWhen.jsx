/* eslint-disable react/forbid-prop-types */

import PropTypes from 'prop-types';

const SwitchWhen = ({ render }) => render;

SwitchWhen.propTypes = {
  equals: PropTypes.any.isRequired,
  render: PropTypes.node.isRequired,
};

export default SwitchWhen;
