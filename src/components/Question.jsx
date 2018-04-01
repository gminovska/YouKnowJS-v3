import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleExplanation } from '../actions/current-quiz';
import AnswersList from './AnswersList';

const Question = ({ question, submitAnswer }) => (
  <div>
    <p>{question.text}</p>
    <AnswersList
      answers={question.answers}
      multipleChoice={question.multipleChoice}
      onSubmit={submitAnswer}
    />
  </div>
);

Question.propTypes = {
  submitAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.array,
    explanation: PropTypes.string,
    multipleChoice: PropTypes.bool,
    text: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  question: state.currentQuiz.questions[state.currentQuiz.currentIndex],
});

const mapDispatchToProps = dispatch => ({
  submitAnswer(v) {
    console.log('------------------------------------------------------');
    console.log(v);
    dispatch(toggleExplanation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
