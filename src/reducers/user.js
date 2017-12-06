const initialState = {
  isLoggedIn: false,
  email: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
      };

    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
      };

    default:
      return state;
  }
};

export default reducer;
