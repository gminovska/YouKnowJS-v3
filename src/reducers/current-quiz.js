const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_QUIZ_SUCCESS':
      return Object.values(action.payload).map(q => ({
        ...q,
        answers: Object.values(q.answers),
      }));

    default:
      return state;
  }
};

export default reducer;
