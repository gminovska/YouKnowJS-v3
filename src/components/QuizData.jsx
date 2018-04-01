import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorMessage from './ErrorMessage';
import Quiz from './Quiz';

const QuizData = ({ error }) => (
  error ? <ErrorMessage /> : <Quiz />
);

QuizData.propTypes = {
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  error: state.errors.onCurrentQuiz,
});

export default connect(mapStateToProps)(QuizData);
