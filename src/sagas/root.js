import { all } from 'redux-saga/effects';

import watchFetchAllQuizzes from './fetch-all-quizzes';
import watchFetchQuiz from './fetch-quiz';
import watchSignupUser from './signup';
import watchLoginUser from './login';
import watchUserLogout from './logout';
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
    watchUserLogout(),
  ]);
}
