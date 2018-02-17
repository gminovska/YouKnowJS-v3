const initialState = {
  id: null,
  currentIndex: 0,
  questions: null,
  lastQuestion: false,
};


const currentQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_QUIZ_SUCCESS':
      return {
        ...state,
        id: action.id,
        questions: Object.values(action.questions).map(q => ({
          ...q,
          answers: Object.values(q.answers),
        })),
      };

    case 'INCREMENT_CURRENT_QUESTION_INDEX':
      return {
        ...state,
        lastQuestion: state.currentIndex === state.questions.length - 1,
        currentIndex: state.currentIndex === state.questions.length - 1
          ? state.currentIndex
          : state.currentIndex + 1,
      };

    default:
      return state;
  }
};

export default currentQuizReducer;
