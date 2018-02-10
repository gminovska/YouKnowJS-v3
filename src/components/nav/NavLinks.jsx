/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SwitchIf from '../../containers/utils/SwitchIf';
import SwitchWhen from '../../containers/utils/SwitchWhen';
import { userLogout } from '../../actions/user';

const extractName = email => (
  email
    ? email.split('@')[0]
    : ''
);

const UserLinks = ({ clickHandler, name }) => (
  <div>
    Hello {name}!
    <button onClick={clickHandler}>
      Logout
    </button>
  </div>
);

UserLinks.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const GuestLinks = () => (
  <div>
    <Link to="/user/login" className="primary-navbar__link">Login</Link>
    <Link to="/user/signup" className="primary-navbar__link">Signup</Link>
  </div>
);

const NavLinks = ({
  userLoggedIn, userDataFetched, logout, userEmail,
}) => (
  <SwitchIf test={userDataFetched}>
    <SwitchIf equals={true} test={userLoggedIn}>
      <SwitchWhen
        equals={true}
        render={
          <UserLinks
            clickHandler={logout}
            name={extractName(userEmail)}
          />
        }
      />
      <SwitchWhen equals={false} render={<GuestLinks />} />
    </SwitchIf>
    <SwitchWhen equals={false} />
  </SwitchIf>
);


NavLinks.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
  userDataFetched: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userLoggedIn: state.user.isLoggedIn,
  userEmail: state.user.email,
  userDataFetched: !state.loaders.onFetchUser,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(userLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
