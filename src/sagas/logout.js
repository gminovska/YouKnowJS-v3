import { auth } from 'firebase';
import { takeEvery } from 'redux-saga/effects';


export function* logoutUser() {
  yield auth().signOut();
}

export default function* watchLogoutUser() {
  yield takeEvery('USER_LOGOUT', logoutUser);
}
