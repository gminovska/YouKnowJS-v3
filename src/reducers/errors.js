const initialState = {
  onSignup: false,
  onLogin: false,
  onQuizzes: false,
  onCurrentQuiz: false,
  message: '',
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_FAILURE':
      return {
        ...state,
        onSignup: true,
        message: action.message,
      };

    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        onSignup: false,
        message: '',
      };

    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        onQuizzes: true,
        message: action.message,
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
        message: action.message,
      };

    case 'FETCH_CURRENT_QUIZ_SUCCESS':
      return {
        ...state,
        onCurrentQuiz: false,
        message: '',
      };

    case 'FETCH_ALL_QUIZZES_SUCCESS':
      return {
        ...state,
        onQuizzes: false,
        message: '',
      };

    default:
      return state;
  }
};

export default errorsReducer;
