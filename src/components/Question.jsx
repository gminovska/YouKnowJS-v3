import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incrementCurrentQuestionIndex } from '../actions/current-quiz';

const Quiz = ({
  questions,
  isLastQuestion,
  currentIndex,
  nextQuestion,
}) => {
  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <p>{currentQuestion.text}</p>
      <ul>
        {currentQuestion.answers.map(q => (
          <li>
            <label htmlFor={q.text}>
              {q.text}
              <input type="radio" value={q.text} name="answer" />
            </label>
          </li>
        ))}
      </ul>
      <button onClick={nextQuestion}>
        {isLastQuestion ? 'Finish' : 'Submit'}
      </button>
    </div>
  );
};

Quiz.propTypes = {
  isLastQuestion: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.array,
    text: PropTypes.string,
    multipleChoice: PropTypes.bool,
    explanation: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  ...state.currentQuiz,
});

const mapDispatchToProps = dispatch => ({
  nextQuestion() {
    dispatch(incrementCurrentQuestionIndex());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
