import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from './Question';
import { incrementCurrentQuestionIndex } from '../actions/current-quiz';

const Quiz = ({ nextQuestion, questions, currentIndex }) => {
  const isLast = currentIndex === questions.length - 1;

  return (
    <Question
      question={questions[currentIndex]}
      isLastQuestion={isLast}
      buttonText={isLast ? 'Finish' : 'Next Question'}
      nextQuestion={isLast ? () => undefined : nextQuestion}
    />
  );
};

Quiz.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentIndex: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  questions: state.currentQuiz.questions,
  currentIndex: state.currentQuiz.currentIndex,
});

const mapDisptachToProps = dispatch => ({
  nextQuestion() {
    dispatch(incrementCurrentQuestionIndex());
  },
});

export default connect(mapStateToProps, mapDisptachToProps)(Quiz);
