import React from 'react';
// import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Quiz from './Quiz';
import Login from './Login';
import Signup from './signup/Signup';
import Nav from '../components/nav/Nav';

const Routes = () => (
  <HashRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/signup" component={Signup} />
      </Switch>
    </div>
  </HashRouter>
);

export default Routes;
