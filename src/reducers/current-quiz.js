import checkSingleChoiceAnswer from '../utils/checkSingleChoiceAnswer';
import checkMultipleChoiceAnswer from '../utils/checkMultipleChoiceAnswer';

const initialState = {
  id: null,
  currentIndex: 0,
  questions: null,
  score: 0,
  isLastQuestion: false,
  displayExplanation: false,
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
        ...state.currentIndex === state.questions.length - 1
          && { currentIndex: state.currentIndex, isLastQuestion: true },
        ...state.currentIndex !== state.questions.length - 1
          && { currentIndex: state.currentIndex + 1 },
      };

    case 'INCREMENT_SCORE':
      return {
        ...state,
        score: state.score + 1,
      };

    case 'TOGGLE_EXPLANATION':
      return {
        ...state,
        displayExplanation: !state.displayExplanation,
      };

    case 'SUBMIT_SINGLE_CHOICE_ANSWER':
      return {
        ...state,
        score: checkSingleChoiceAnswer(state.questions[state.currentIndex].answers, action.answer)
          ? state.score + 1
          : state.score,
      };

    case 'SUBMIT_MULTIPLE_CHOICE_ANSWER':
      return {
        ...state,
        score: checkMultipleChoiceAnswer(
          state.questions[state.currentIndex].answers,
          action.answers,
        ) ? state.score + 1 : state.score,
      };

    default:
      return state;
  }
};

export default currentQuizReducer;
