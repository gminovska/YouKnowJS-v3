import { database } from 'firebase';
import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchQuizSuccess, fetchQuizFailure } from '../actions/current-quiz';

/**
 * fetchQuiz
 * @param {object} action FETCH_CURRENT_QUIZ_REQUEST action
 * Fetch a specific quiz object from DB
 * @returns {object} Iterator
 */
export function* fetchQuiz(action) {
  const id = action.payload;
  const ref = database().ref(`quizzes-questions/${id}`);
  try {
    const data = yield call([ref, 'once'], 'value');
    console.log(data.val());
    yield put(fetchQuizSuccess(data.val()));
  } catch (e) {
    yield put(fetchQuizFailure());
  }
}

/**
 * watchFetchQuiz
 * @returns {object} Iterator
 */
export default function* watchFetchQuiz() {
  yield takeEvery('FETCH_CURRENT_QUIZ_REQUEST', fetchQuiz);
}
