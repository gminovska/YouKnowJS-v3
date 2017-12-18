/* eslint-disable react/forbid-prop-types */
/*
  This solution is taken from https://medium.com/@eddyw/suck-less-at-react-utilities-1-switch-components-db20cc30ced
*/
import React from 'react';
import PropTypes from 'prop-types';
import SwitchWhen from './SwitchWhen';


const SwitchIf = ({ children, test }) => (
  React.Children
    .toArray(children)
    .find(Component => Component.props.equals === test) || null
);

SwitchIf.defaultProps = {
  children: null,
  equals: undefined,
};

SwitchIf.propTypes = {
  test: PropTypes.any.isRequired,
  equals: PropTypes.any,
  children: props => (
    React.Children
      .toArray(props.children)
      .some(Component => ![SwitchIf, SwitchWhen].includes(Component.type))
      ? new Error('Children must be an instance of SwitchIf or SwitchWhen')
      : null
  ),
};

export default SwitchIf;
