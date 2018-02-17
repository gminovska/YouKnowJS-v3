import React from 'react';
// import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import QuizDataFetcher from './QuizDataFetcher';
import Login from './login/Login';
import Signup from './signup/Signup';
import Nav from '../components/nav/Nav';

const Routes = () => (
  <HashRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz/:id" component={QuizDataFetcher} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/signup" component={Signup} />
      </Switch>
    </div>
  </HashRouter>
);

export default Routes;
