import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  toggleExplanation,
  incrementCurrentQuestionIndex } from '../actions/current-quiz';

const Explanation = ({ text, isLast, handleClick, isCorrect }) => (
  <div>
    <p>{ isCorrect ? 'Correct' : 'Wrong'}</p>
    <p>{text}</p>
    <button onClick={() => { handleClick(isLast); }}>
      Next question
    </button>
  </div>
);

Explanation.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLast: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  text: state.currentQuiz.questions[state.currentQuiz.currentIndex].explanation,
  isLast: state.currentQuiz.isLastQuestion,
  isCorrect: state.currentQuiz.isAnswerCorrect,
});

const mapDispatchToProps = dispatch => ({
  handleClick(isLast) {
    dispatch(toggleExplanation());
    dispatch(incrementCurrentQuestionIndex());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Explanation);
