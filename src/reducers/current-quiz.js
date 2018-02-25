const initialState = {
  id: null,
  currentIndex: 0,
  questions: null,
};

// TODO remove info about answers being checked from the global state

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
        currentIndex: state.currentIndex === state.questions.length - 1
          ? state.currentIndex
          : state.currentIndex + 1,
      };

    default:
      return state;
  }
};

export default currentQuizReducer;
