import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <input type={type} {...input} />
    <div className="user-form__error">
      {touched && error}
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
