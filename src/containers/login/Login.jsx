import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import LoginForm from './login_form';
import { userLoginRequest } from '../../actions/user';

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  submit = (vals) => {
    const { email, password } = vals;
    this.props.login(email, password);
  }

  render() {
    return (
      <LoginForm onSubmit={this.submit} headerText="Log in" />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login(email, pass) {
    dispatch(userLoginRequest(email, pass));
  },
});

export default connect(undefined, mapDispatchToProps)(Login);
