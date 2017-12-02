import { put, call } from 'redux-saga/effects';
import firebase from 'firebase';

import config from '../config/test-config';
import { fetchAllQuizzes } from '../src/sagas/fetch-all-quizzes';
import { fetchQuizzesSuccess, fetchQuizzesFailure } from '../src/actions/quizzes';

firebase.initializeApp(config);

describe('fetchAllQuizzes saga', () => {
  it('Successfully fetched data from DB', () => {
    const gen = fetchAllQuizzes();
    const ref = firebase.database().ref('/quizzes-general');
    const response = {
      val() {
        return 'hehe';
      },
    };

    expect(gen.next().value).toEqual(call([ref, 'once'], 'value'));
    expect(gen.next(response).value).toEqual(put(fetchQuizzesSuccess('hehe')));
  });

  it('Dispatches a failure action if something goes wrong', () => {
    const gen = fetchAllQuizzes();
    const ref = firebase.database().ref('quizzes-general');
    expect(gen.next().value).toEqual(call([ref, 'once'], 'value'));
    expect(gen.throw().value).toEqual(put(fetchQuizzesFailure()));
  });
});
