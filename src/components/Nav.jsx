/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="primary-navbar">
    <div>
      <Link to="/" className="primary-navbar__logo">YouKnowJS</Link>
    </div>
    <div>
      <Link to="/" className="primary-navbar__link">Home</Link>
      <Link to="/user/signup" className="primary-navbar__link">Signup</Link>
      <Link to="/quiz/8" className="primary-navbar__link">Quiz8</Link>
    </div>
  </nav>
);

Nav.propTypes = {

};

export default Nav;
