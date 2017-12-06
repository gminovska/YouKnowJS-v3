export const userSignupRequest = (email, password) => ({
  type: 'USER_SIGNUP_REQUEST',
  email,
  password,
});

export const userSignupSuccess = user => ({
  type: 'USER_SIGNUP_SUCCESS',
  payload: user,
});

export const userSignupFailure = error => ({
  type: 'USER_SIGNUP_FAILURE',
  message: error.message,
});

export const userLoginRequest = (email, password) => ({
  type: 'USER_LOGIN_REQUEST',
  email,
  password,
});

export const userLoginSuccess = user => ({
  type: 'USER_LOGIN_SUCCESS',
  payload: user,
});

export const userLoginFailure = error => ({
  type: 'USER_LOGIN_FAILURE',
  message: error.message,
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});

export const setUser = user => ({
  type: 'SET_USER',
  payload: user,
});
