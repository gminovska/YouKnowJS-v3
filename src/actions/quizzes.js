export const fetchQuizzesRequest = () => ({
  type: 'FETCH_ALL_QUIZZES_REQUEST',
});

export const fetchQuizzesSuccess = quizzes => ({
  type: 'FETCH_ALL_QUIZZES_SUCCESS',
  payload: quizzes,
});

export const fetchQuizzesFailure = () => ({
  type: 'FETCH_ALL_QUIZZES_FAILURE',
});
