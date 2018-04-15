import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const QuizSummary = ({ score }) => {
  return (
    <div>Current score: {score}</div>
  );
};

QuizSummary.propTypes = {
  score: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  score: state.currentQuiz.score,
});
export default connect(mapStateToProps)(QuizSummary);
