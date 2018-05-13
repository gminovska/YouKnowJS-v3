/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import NavLinks from './NavLinks';

const Nav = () => (
  <Menu inverted>
    <Menu.Item><Link to="/" >YouKnowJS</Link></Menu.Item>
    <Menu.Menu position="right">
      <NavLinks />
    </Menu.Menu>
  </Menu>
);

export default Nav;
