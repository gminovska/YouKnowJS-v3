import { all } from 'redux-saga/effects';

import watchFetchAllQuizzes from './fetch-all-quizzes';
import watchFetchQuiz from './fetch-quiz';

/**
 * rootSaga
 * @returns {object} Iterator
 */
export default function* rootSaga() {
  yield all([
    watchFetchAllQuizzes(),
    watchFetchQuiz(),
  ]);
}
