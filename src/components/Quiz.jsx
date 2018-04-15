import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from './Question';
import Explanation from './Explanation';
import QuizSummary from './QuizSummary';

const Quiz = ({ isFinished, displayExplanation }) => {
  if (isFinished) return <QuizSummary />;
  if (displayExplanation) return <Explanation />;
  return <Question />;
};

Quiz.propTypes = {
  displayExplanation: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  displayExplanation: state.currentQuiz.displayExplanation,
  isFinished: state.currentQuiz.isLastQuestion,
});

export default connect(mapStateToProps)(Quiz);
