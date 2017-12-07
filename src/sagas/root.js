import { all } from 'redux-saga/effects';

import watchFetchAllQuizzes from './fetch-all-quizzes';
import watchFetchQuiz from './fetch-quiz';
import watchSignupUser from './signup';
import watchLoginUser from './login';
/**
 * rootSaga
 * @returns {object} Iterator
 */
export default function* rootSaga() {
  yield all([
    watchFetchAllQuizzes(),
    watchFetchQuiz(),
    watchSignupUser(),
    watchLoginUser(),
  ]);
}
