import * as a from '../src/actions/user';

const user = { name: 'Jake', email: 'nope@donthave.com' };

describe('User signup actions', () => {
  it('USER_SIGNUP_REQUEST', () => {
    expect(a.userSignupRequest()).toEqual({
      type: 'USER_SIGNUP_REQUEST',
    });
  });

  it('USER_SIGNUP_SUCCESS', () => {
    expect(a.userSignupSuccess(user)).toEqual({
      type: 'USER_SIGNUP_SUCCESS',
      payload: expect.objectContaining({
        name: 'Jake',
        email: 'nope@donthave.com',
      }),
    });
  });

  it('USER_SIGNUP_FAILURE', () => {
    expect(a.userSignupFailure()).toEqual({
      type: 'USER_SIGNUP_FAILURE',
    });
  });
});

describe('User login actions', () => {
  it('USER_LOGIN_REQUEST', () => {
    expect(a.userLoginRequest()).toEqual({
      type: 'USER_LOGIN_REQUEST',
    });
  });

  it('USER_LOGIN_SUCCESS', () => {
    expect(a.userLoginSuccess(user)).toEqual({
      type: 'USER_LOGIN_SUCCESS',
      payload: user,
    });
  });

  it('USER_LOGIN_FAILURE', () => {
    expect(a.userLoginFailure()).toEqual({
      type: 'USER_LOGIN_FAILURE',
    });
  });
});
