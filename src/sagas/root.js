import { all } from 'redux-saga/effects';

import watchFetchAllQuizzes from './fetch-all-quizzes';

/**
 * rootSaga
 * @returns {object} Iterator
 */
export default function* rootSaga() {
  yield all([
    watchFetchAllQuizzes(),
  ]);
}
