/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import user from './reducers/user';
import errors from './reducers/errors';
import loaders from './reducers/loaders';
import quizzes from './reducers/quizzes';
import currentQuiz from './reducers/current-quiz';

// For Chrome Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    user, errors, loaders, quizzes, currentQuiz,
  }),
  {},
  composeEnhancers(applyMiddleware(logger)),
);

export default store;
