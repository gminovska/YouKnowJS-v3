const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_QUIZ_SUCCESS':
      return action.payload;

    default:
      return state;
  }
};

export default reducer;