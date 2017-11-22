const initialState = {
  onSignup: false,
  onLogin: false,
  onQuizzes: false,
  onCurrentQuiz: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_FAILURE':
      return {
        ...state,
        onSignup: true,
      };

    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        onQuizzes: true,
      };

    case 'FETCH_ALL_QUIZZES_FAILURE':
      return {
        ...state,
        onQuizzes: true,
      };

    case 'FETCH_CURRENT_QUIZ_FAILURE':
      return {
        ...state,
        onCurrentQuiz: true,
      };

    default:
      return state;
  }
};

export default reducer;
