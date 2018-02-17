const initialState = {
  id: null,
  currentIndex: 0,
  questions: null,
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
    default:
      return state;
  }
};

export default currentQuizReducer;
