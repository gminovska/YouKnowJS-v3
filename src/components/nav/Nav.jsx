/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';

const Nav = () => (
  <nav className="primary-navbar">
    <div>
      <Link to="/" className="primary-navbar__logo">YouKnowJS</Link>
    </div>
    <div>
      <NavLinks />
    </div>
  </nav>
);

export default Nav;
