import { database } from 'firebase';
import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchQuizzesSuccess, fetchQuizzesFailure } from '../actions/quizzes';

/**
 * fetchAllQuizzes
 * Fetch general information about all the quizzes from the DB
 * @returns {object} Iterator
 */
export function* fetchAllQuizzes() {
  const ref = database().ref('/quizzes-general');
  try {
    const data = yield call([ref, 'once'], 'value');
    yield put(fetchQuizzesSuccess(data.val()));
  } catch (e) {
    yield put(fetchQuizzesFailure());
  }
}

/**
 * watchFetchAllQuizzes
 * Watch for 'FETCH_ALL_QUIZZES' action
 * @returns {object} Iterator
 */
export default function* watchFetchAllQuizzes() {
  yield takeEvery('FETCH_ALL_QUIZZES_REQUEST', fetchAllQuizzes);
}
