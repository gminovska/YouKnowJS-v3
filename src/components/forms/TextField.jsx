import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <input type={type} {...input} />
    <div>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

TextField.defaultProps = {
  type: 'text',
};

/* eslint-disable react/forbid-prop-types */
TextField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default TextField;
