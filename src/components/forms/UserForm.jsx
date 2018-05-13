import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Card, Button, Icon, Form } from 'semantic-ui-react';

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

// TODO: Handle a case when login / signup fails (not because of failed validation)
const UserForm = ({ handleSubmit, showErr, errMsg, headerText }) => (
  <div className="user-form__wrapper">
    <Card>
      <Form onSubmit={handleSubmit} className="user-form">
        <h3 className="user-form__header">
          {headerText}
        </h3>
        <div className="user-form__error">
          {showErr && errMsg}
        </div>
        <div className="user-form__field">
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
        <div className="user-form__field">
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
        <div className="user-form__button">
          <Button animated type="submit" color="yellow">
            <Button.Content visible>{headerText}</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </div>
      </Form>
    </Card>
  </div>
);

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  showErr: PropTypes.bool.isRequired,
  errMsg: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default UserForm;
