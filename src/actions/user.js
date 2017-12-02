export const userSignupRequest = () => ({
  type: 'USER_SIGNUP_REQUEST',
});

export const userSignupSuccess = user => ({
  type: 'USER_SIGNUP_SUCCESS',
  payload: user,
});

export const userSignupFailure = () => ({
  type: 'USER_SIGNUP_FAILURE',
});

export const userLoginRequest = () => ({
  type: 'USER_LOGIN_REQUEST',
});

export const userLoginSuccess = user => ({
  type: 'USER_LOGIN_SUCCESS',
  payload: user,
});

export const userLoginFailure = () => ({
  type: 'USER_LOGIN_FAILURE',
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});
