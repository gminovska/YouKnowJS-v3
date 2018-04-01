import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  toggleExplanation,
  incrementCurrentQuestionIndex } from '../actions/current-quiz';

const Explanation = ({ text, isLast, handleClick }) => (
  <div>
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
};

const mapStateToProps = state => ({
  text: state.currentQuiz.questions[state.currentQuiz.currentIndex].explanation,
  isLast: state.currentQuiz.isLastQuestion,
});

const mapDispatchToProps = dispatch => ({
  handleClick(isLast) {
    dispatch(toggleExplanation());
    dispatch(incrementCurrentQuestionIndex());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Explanation);
