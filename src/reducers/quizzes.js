const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_QUIZZES_SUCCESS':
      return Object.values(action.payload);

    default:
      return state;
  }
};

export default reducer;
