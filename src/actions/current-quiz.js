export const fetchQuizRequest = id => ({
  type: 'FETCH_CURRENT_QUIZ_REQUEST',
  payload: id,
});

export const fetchQuizSuccess = (questions, id) => ({
  type: 'FETCH_CURRENT_QUIZ_SUCCESS',
  questions,
  id,
});

export const fetchQuizFailure = message => ({
  type: 'FETCH_CURRENT_QUIZ_FAILURE',
  message,
});
