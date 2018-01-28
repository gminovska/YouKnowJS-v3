import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextField from './TextField';

const validateEmail = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
);

const validatePass = value => (
  value && value.length < 6
    ? 'Password should be at least 6 characters long'
    : undefined
);

const SignupForm = ({ handleSubmit, showErr, errMsg }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email
          <Field
            name="email"
            component={TextField}
            type="text"
            validate={validateEmail}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <Field
            name="password"
            component={TextField}
            validate={validatePass}
            type="password"
            label="password"
          />
        </label>
      </div>
      <div>
        {showErr && errMsg}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  showErr: PropTypes.bool.isRequired,
  errMsg: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  showErr: state.errors.onSignup,
  errMsg: state.errors.message,
});


export default connect(mapStateToProps)(reduxForm({ form: 'signup' })(SignupForm));
