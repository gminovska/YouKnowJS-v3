import { all } from 'redux-saga/effects';

import watchFetchAllQuizzes from './fetch-all-quizzes';
import watchFetchQuiz from './fetch-quiz';
import watchSignupUser from './signup';

/**
 * rootSaga
 * @returns {object} Iterator
 */
export default function* rootSaga() {
  yield all([
    watchFetchAllQuizzes(),
    watchFetchQuiz(),
    watchSignupUser(),
  ]);
}
