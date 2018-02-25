const initialState = {
  isLoggedIn: false,
  email: null,
};

const userReducer = (state = initialState, action) => {
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

    case 'SET_USER':
      return {
        ...state,
        isLoggedIn: !!action.payload,
        email: action.payload === null ? null : action.payload.email,
      };

    default:
      return state;
  }
};

export default userReducer;
