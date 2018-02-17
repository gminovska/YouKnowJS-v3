import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incrementCurrentQuestionIndex } from '../actions/current-quiz';

const Quiz = ({ nextQuestion }) => (
  <div>Quiz
    <button onClick={nextQuestion}>CHANGE INDEX</button>
  </div>
);

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
