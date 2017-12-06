import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { auth } from 'firebase';

import { userSignupRequest, setUser } from '../actions/user';

class Tester extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      name: '',
      pass: '',
    };
  }
  
  componentDidMount = () => {
    this.authListener = auth().onAuthStateChanged((user) => {
      this.props.update(user);
    });
  }

  componentWillUnmount = () => {
    this.authListener.off();
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  handlePassChange = (e) => {
    this.setState({
      pass: e.target.value,
    });
  }

  send = () => {
    this.props.signup(this.state.name, this.state.pass);
  }

  /**
   * @returns {object} React element
   */
  render() {
    return (
      <div>
        <div>{this.props.error}</div>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="text"
            value={this.state.pass}
            onChange={this.handlePassChange}
          />
          <Button
            onClick={this.send}
          >
            Send
          </Button>
        </FormGroup>
      </div>
    );
  }
}

Tester.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.string,
  update: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  error: state.errors.message,
});
const mapDispatchToProps = dispatch => ({
  signup(name, pass) {
    dispatch(userSignupRequest(name, pass));
  },
  update(user) {
    dispatch(setUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tester);
