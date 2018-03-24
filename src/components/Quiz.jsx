import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from './Question';

const Quiz = ({ displayExplanation }) => (
  displayExplanation
    ? <div>Explanation yo</div>
    : <Question />
);

Quiz.propTypes = {
  displayExplanation: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  displayExplanation: state.currentQuiz.displayExplanation,
});

export default connect(mapStateToProps)(Quiz);
