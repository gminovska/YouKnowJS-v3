import firebase from 'firebase';
import { put, takeEvery, call } from 'redux-saga/effects';

import { userSignupFailure, userSignupSuccess } from '../actions/user';
/**
 * signupUser
 * @param {object} action USER_SIGNUP_REQUEST
 * Create a new user
 * @returns {object} Iterator
 */
export function* signupUser(action) {
  try {
    const authUser = firebase.auth();
    const user = yield authUser.createUserWithEmailAndPassword(action.email, action.password);

    yield put(userSignupSuccess(user));
  } catch (e) {
    yield put(userSignupFailure(e));
  }
}

/**
 * watch SignupUser
 * @returns {object} Iterator
 */
export default function* watchSignupUser() {
  yield takeEvery('USER_SIGNUP_REQUEST', signupUser);
}
