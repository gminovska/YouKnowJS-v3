export const fetchQuizRequest = id => ({
  type: 'FETCH_CURRENT_QUIZ_REQUEST',
  payload: id,
});

export const fetchQuizSuccess = currentQuiz => ({
  type: 'FETCH_CURRENT_QUIZ_SUCCESS',
  payload: currentQuiz,
});

export const fetchQuizFailure = message => ({
  type: 'FETCH_CURRENT_QUIZ_FAILURE',
  message,
});
