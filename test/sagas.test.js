import { put, call } from 'redux-saga/effects';
import firebase from 'firebase';

import config from '../config/test-config';
import { fetchAllQuizzes } from '../src/sagas/fetch-all-quizzes';
import { fetchQuizzesSuccess, fetchQuizzesFailure } from '../src/actions/quizzes';
import { fetchQuiz } from '../src/sagas/fetch-quiz';
import { fetchQuizSuccess, fetchQuizFailure, fetchQuizRequest } from '../src/actions/current-quiz';
import * as user from '../src/actions/user';
import { loginUser } from '../src/sagas/login';
import { signupUser } from '../src/sagas/signup';

firebase.initializeApp(config);

const response = {
  val() {
    return 'hehe';
  },
};

describe('fetchAllQuizzes saga', () => {
  it('Successfully fetched data from DB', () => {
    const gen = fetchAllQuizzes();
    const ref = firebase.database().ref('/quizzes-general');

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


describe('fetchQuiz saga', () => {
  it('Successfully fetched data from DB', () => {
    const action = fetchQuizRequest('hahaha');
    const ref = firebase.database().ref('quizzes-questions/hahaha');
    const gen = fetchQuiz(action);

    expect(gen.next().value).toEqual(call([ref, 'once'], 'value'));
    expect(gen.next(response).value).toEqual(put(fetchQuizSuccess('hehe')));
  });

  it('Dispatches a failure action if something goes wrong', () => {
    const action = fetchQuizRequest('hahaha');
    const ref = firebase.database().ref('quizzes-questions/hahaha');
    const gen = fetchQuiz(action);

    expect(gen.next().value).toEqual(call([ref, 'once'], 'value'));
    expect(gen.throw().value).toEqual(put(fetchQuizFailure()));
  });
});


describe('signupUser saga', () => {
  it('Successfuly signs user up', () => {
    const action = user.userSignupRequest('snoopy@snoop.com', 'hehehe');
    const gen = signupUser(action);
    gen.next();
    const result = gen.next('???');

    expect(result.value).toEqual(put(user.userSignupSuccess('???')));
  });

  it('Dispatches failure action if something goes wrong', () => {
    const action = user.userSignupRequest('snoopy@snoop.com', 'hehehe');
    const gen = signupUser(action);
    const error = {
      message: 'TEST!',
    };
    gen.next();
    expect(gen.throw(error).value).toEqual(put(user.userSignupFailure(error)));
  });
});


describe('loginUser saga', () => {
  it('Successfuly logs user in', () => {
    const action = user.userLoginRequest('snoopy@snoop.com', 'hehehe');
    const gen = loginUser(action);
    gen.next();
    const result = gen.next('???');

    expect(result.value).toEqual(put(user.userLoginSuccess('???')));
  });

  it('Dispatches failure action if something goes wrong', () => {
    const action = user.userLoginRequest('snoopy@snoop.com', 'hehehe');
    const gen = loginUser(action);
    gen.next();
    const result = gen.throw({ message: '???' });

    expect(result.value).toEqual(put(user.userLoginFailure({ message: '???' })));
  });
});
