import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/user';

class Signup extends React.Component {
  submit = (vals) => {
    const { email, password } = vals;
    this.props.signup(email, password);
  }

  render() {
    return (
      <SignupForm onSubmit={this.submit} />
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  signup(email, pass) {
    dispatch(userSignupRequest(email, pass));
  },
});


export default connect(undefined, mapDispatchToProps)(Signup);
