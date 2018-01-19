import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const SignupForm = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email
          <Field
            name="email"
            component="input"
            type="text"
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <Field
            name="password"
            component="input"
            type="password"
            label="password"
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'signup' })(SignupForm);
