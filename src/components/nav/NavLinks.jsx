/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SwitchIf from '../../containers/utils/SwitchIf';
import SwitchWhen from '../../containers/utils/SwitchWhen';
import { userLogout } from '../../actions/user';

const UserLinks = ({ clickHandler }) => (
  <div>
    <span role="button" onClick={clickHandler}>
      Logout
    </span>
  </div>
);

UserLinks.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

const GuestLinks = () => (
  <div>
    <Link to="/user/login" className="primary-navbar__link">Login</Link>
    <Link to="/user/signup" className="primary-navbar__link">Signup</Link>
  </div>
);

const NavLinks = ({ userLoggedIn, userDataFetched, logout }) => (
  <SwitchIf test={userDataFetched}>
    <SwitchIf equals={true} test={userLoggedIn}>
      <SwitchWhen equals={true} render={<UserLinks clickHandler={logout} />} />
      <SwitchWhen equals={false} render={<GuestLinks />} />
    </SwitchIf>
    <SwitchWhen equals={false} />
  </SwitchIf>
);


NavLinks.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
  userDataFetched: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userLoggedIn: state.user.isLoggedIn,
  userDataFetched: !state.loaders.onFetchUser,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(userLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
