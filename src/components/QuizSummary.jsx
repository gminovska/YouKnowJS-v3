import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const QuizSummary = ({ score, redirect }) => (
  <div>
    <h3>Current score: {score}</h3>
    <button onClick={redirect}>Take Another Quiz</button>
  </div>
);


QuizSummary.propTypes = {
  score: PropTypes.number.isRequired,
  redirect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  score: state.currentQuiz.score,
});
export default connect(mapStateToProps)(QuizSummary);
