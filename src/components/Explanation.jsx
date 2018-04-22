import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  toggleExplanation,
  incrementCurrentQuestionIndex } from '../actions/current-quiz';

const Explanation = ({ text, handleClick, isCorrect }) => (
  <div>
    <p>{isCorrect ? 'Correct' : 'Wrong'}</p>
    <p>{text}</p>
    <button onClick={handleClick}>
     OK
    </button>
  </div>
);

Explanation.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  text: state.currentQuiz.questions[state.currentQuiz.currentIndex].explanation,
  isCorrect: state.currentQuiz.isAnswerCorrect,
});

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(toggleExplanation());
    dispatch(incrementCurrentQuestionIndex());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Explanation);
