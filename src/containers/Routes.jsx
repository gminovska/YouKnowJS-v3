import React from 'react';
// import PropTypes from 'prop-types';
import { HashRouter, Route } from 'react-router-dom';

import Home from './Home';
import Quiz from './Quiz';
import Nav from '../components/Nav';


const Routes = () => (
  <HashRouter>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/quiz/:id" component={Quiz} />
    </div>
  </HashRouter>
);

export default Routes;
