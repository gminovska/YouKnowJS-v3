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
    const response = yield call([ref, 'once'], 'value');
    const data = response.val();
    if (data === null) {
      throw new Error('Sorry, no such quiz exists');
    } else {
      yield put(fetchQuizSuccess(data));
    }
  } catch (e) {
    yield put(fetchQuizFailure(e.message));
  }
}

/**
 * watchFetchQuiz
 * @returns {object} Iterator
 */
export default function* watchFetchQuiz() {
  yield takeEvery('FETCH_CURRENT_QUIZ_REQUEST', fetchQuiz);
}
