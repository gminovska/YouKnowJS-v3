const initialState = {
  onSignup: false,
  onLogin: false,
  onQuizzes: false,
  onCurrentQuiz: false,
  onFetchUser: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_REQUEST':
      return {
        ...state,
        onSignup: true,
      };

    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        onSignup: false,
      };

    case 'USER_SIGNUP_FAILURE':
      return {
        ...state,
        onSignup: false,
      };

    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        onLogin: true,
      };

    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        onLogin: false,
      };

    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        onLogin: false,
      };

    case 'FETCH_ALL_QUIZZES_REQUEST':
      return {
        ...state,
        onQuizzes: true,
      };

    case 'FETCH_ALL_QUIZZES_SUCCESS':
      return {
        ...state,
        onQuizzes: false,
      };

    case 'FETCH_ALL_QUIZZES_FAILURE':
      return {
        ...state,
        onQuizzes: false,
      };

    case 'FETCH_CURRENT_QUIZ_REQUEST':
      return {
        ...state,
        onCurrentQuiz: true,
      };

    case 'FETCH_CURRENT_QUIZ_SUCCESS':
      return {
        ...state,
        onCurrentQuiz: false,
      };

    case 'FETCH_CURRENT_QUIZ_FAILURE':
      return {
        ...state,
        onCurrentQuiz: false,
      };

    case 'SET_USER':
      return {
        ...state,
        onFetchUser: false,
      };

    default:
      return state;
  }
};

export default reducer;
