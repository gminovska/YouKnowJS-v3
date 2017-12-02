import { fetchQuizzesSuccess } from '../src/actions/quizzes';
import quizzesReducer from '../src/reducers/quizzes';

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
