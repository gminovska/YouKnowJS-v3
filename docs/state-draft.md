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

### Fetch general info about all quizzes
1. Dispatch `FETCH_ALL_QUIZZES_REQUEST` action
  * set state.loaders.onQuizzes to true
2. Dispatch one of:
  - `FETCH_ALL_QUIZZES_SUCCESS` action
    * set state.loaders.onQuizzes to false
    * set state.quizzes to fetched quizzes
  - `FETCH_ALL_QUIZZES_FAILURE` action
    * set state.loaders.onQuizzes to false
    * set state.errors.onQuizzes to true