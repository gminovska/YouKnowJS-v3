import { auth } from 'firebase';
import { put, takeEvery, call } from 'redux-saga/effects';
import { userLoginFailure, userLoginSuccess } from '../actions/user';

/**
 * loginUser
 * @param {object} action USER_LOGIN_REQUEST
 * Create a new user
 * @returns {object} Iterator
 */
export function* loginUser(action) {
  try {
    const authUser = auth();
    const user = yield call([authUser, 'signInWithEmailAndPassword'], action.email, action.password);

    yield put(userLoginSuccess(user));
  } catch (e) {
    yield put(userLoginFailure(e));
  }
}

/**
 * watch loginUser
 * @returns {object} Iterator
 */
export default function* watchLoginUser() {
  yield takeEvery('USER_LOGIN_REQUEST', loginUser);
}
