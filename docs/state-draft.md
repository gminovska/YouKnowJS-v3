## Shape of app's global state

```javascript
state = {
  User: {
    isLoggedIn: Boolean,
    name: String,
    email: String,
  },
  Loaders: { someLoader: Boolean },
  Errors: { someError: Boolean },
  Quizzes: [
    {
      id: String,
      name: String,
      description: String,
      imgUrl: String,
      numberOfQuestion: Number,
    },
  ],
  currentQuiz: undefined || {
    id: String,
    questions: [
      {
        text: String,
        explanation: String,
        mulitpleChoice: Boolean,
        answers: [
          {
            text: String,
            correct: Boolean,
            checked: Boolean,
          }
        ],
      }
    ]
  },
  resultsData: Object,
}
```

## State transformations

### Signup User
1. Collect data from signup form (modal)
  * On focusing input field, set state.errors.onSingup to false
2. Dispatch the `USER_SIGNUP_REQUEST` action
  * set state.loaders.onSignup to true
3. Dispatch one of:
  - `USER_SIGNUP_SUCCESS` action
    * set state.loaders.onSignup to false
    * set state.user to fetched user
  - `USER_SIGNUP_FAILURE`
    * set state.loaders.onSignup to false
    * set state.errors.onSingup to true

### Login User
1. Collect data from login form (modal)
  * On focusing input field, set state.errors.onLogin to false
2. Dispatch the `USER_LOGIN_REQUEST` action
  * set state.loaders.onLogin to true
3. Dispatch one of:
  - `USER_LOGIN_SUCCESS` action
    * set state.loaders.onLogin to false
    * set state.user to fetched user
  - `USER_LOGIN_FAILURE`
    * set state.loaders.onLogin to false
    * set state.errors.onLogin to true

### Logout User
1. User presses a logout button
2. Dispatch `USER_LOGOUT` action
  * set state.user to empty (initial state)

### Fetch general info about all quizzes
1. User clicks on "Take a quiz" button
2. Dispatch `FETCH_ALL_QUIZZES_REQUEST` action
  * set state.loaders.onQuizzes to true
3. Dispatch one of:
  - `FETCH_ALL_QUIZZES_SUCCESS` action
    * set state.loaders.onQuizzes to false
    * set state.quizzes to fetched quizzes
  - `FETCH_ALL_QUIZZES_FAILURE` action
    * set state.loaders.onQuizzes to false
    * set state.errors.onQuizzes to true
    * redirect user to some error screen
      - on componentDidMount set state.errors.onQuizzes to false

### Fetch info about current quiz
1. User picks a quiz
2. Dispatch `CLEAR_ERROR_MSG` action (onCurrentQuiz)
3. Dispatch `FETCH_CURRENT_QUIZ_REQUEST` action
  * set state.loaders.onCurrentQuiz to true
4. Dispatch one of:
  - `FETCH_CURRENT_QUIZ_SUCCESS` action
    * set state.loaders.onCurrentQuiz to false
    * set state.currentQuiz to fetched Object
  - `FETCH_CURRENT_QUIZ_FAILURE` action
    * set state.loaders.onCurrentQuiz to false
    * set state.errors.onCurrentQuiz to true
