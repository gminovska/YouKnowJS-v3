const initialState = {
  isLoggedIn: false,
  name: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        name: action.name,
      };

    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        name: action.name,
      };

    default:
      return state;
  }
};

export default reducer;
