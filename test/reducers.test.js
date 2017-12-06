import { fetchQuizzesSuccess } from '../src/actions/quizzes';
import quizzesReducer from '../src/reducers/quizzes';

import { fetchQuizSuccess } from '../src/actions/current-quiz';
import currentQuizReducer from '../src/reducers/current-quiz';

describe('Quizzes reducer', () => {
  it('FETCH_ALL_QUIZZES_SUCCESS action', () => {
    const reducer = quizzesReducer;
    const action = fetchQuizzesSuccess;
    const payload = {
      fo4: 1,
      ru489: 2,
      rh92y: 3,
    };
    const result = reducer({}, action(payload));

    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
    expect(result).toHaveLength(3);
  });
});

describe('Current quiz reducer', () => {
  it('FETCH_CURRENT_QUIZ_SUCCESS action', () => {
    const reducer = currentQuizReducer;
    const action = fetchQuizSuccess;
    const payload = {
      fo4: {
        explanation: 'blabla',
        multipleChoice: true,
        text: 'This is a question?',
        answers: {
          kjdkjwbd: {
            text: 'Yes, you are so smart',
            correct: true,
            checked: false,
          },
        },
      },
    };
    const result = reducer({}, action(payload));
    expect(result).toEqual(expect.arrayContaining([expect.objectContaining({
      explanation: 'blabla',
      multipleChoice: true,
      text: 'This is a question?',
      answers: expect.arrayContaining([
        expect.objectContaining({
          text: 'Yes, you are so smart',
          correct: true,
          checked: false,
        }),
      ]),
    })]));
  });
});
