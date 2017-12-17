import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from 'firebase';

import { setUser } from '../actions/user';
import Routes from './Routes';


class ListenersContainer extends React.Component {
  componentDidMount = () => {
    this.authListener = auth().onAuthStateChanged((user) => {
      this.props.updateUser(user);
    });
  }

  componentWillUnmount = () => {
    this.authListener.off();
  }

  /**
   * @returns {object} React element
   */
  render() {
    return (
      <Routes />
    );
  }
}

ListenersContainer.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  updateUser(user) {
    dispatch(setUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListenersContainer);
