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

export const incrementCurrentQuestionIndex = () => ({
  type: 'INCREMENT_CURRENT_QUESTION_INDEX',
});

export const incrementScore = () => ({
  type: 'INCREMENT_SCORE',
});

export const toggleExplanation = () => ({
  type: 'TOGGLE_EXPLANATION',
});

export const submitSingleChoiceAnswer = answer => ({
  type: 'SUBMIT_SINGLE_CHOICE_ANSWER',
  answer,
});

export const submitMultipleChoiceAnswer = answers => ({
  type: 'SUBMIT_MULTIPLE_CHOICE_ANSWER',
  answers,
});

export const resetCurrentQuiz = () => ({
  type: 'RESET_CURRENT_QUIZ',
});
