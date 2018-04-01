import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from './Question';
import Explanation from './Explanation';

const Quiz = ({ displayExplanation }) => (
  displayExplanation
    ? <Explanation />
    : <Question />
);

Quiz.propTypes = {
  displayExplanation: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  displayExplanation: state.currentQuiz.displayExplanation,
});

export default connect(mapStateToProps)(Quiz);
