import * as a from '../src/actions/user';

describe('User action creators', () => {
  it('USER_SIGNUP_REQUEST action', () => {
    expect(a.userSignupRequest()).toEqual({
      type: 'USER_SIGNUP_REQUEST',
    });
  });

  it('USER_SIGNUP_SUCCESS action', () => {
    const user = { name: 'Jake', email: 'nope@donthave.com' };

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
