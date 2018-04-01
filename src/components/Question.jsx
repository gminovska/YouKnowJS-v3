import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleExplanation, submitAnswer } from '../actions/current-quiz';
import AnswersList from './AnswersList';

const Question = ({ question, submit }) => (
  <div>
    <p>{question.text}</p>
    <AnswersList
      answers={question.answers}
      multipleChoice={question.multipleChoice}
      onSubmit={submit}
    />
  </div>
);

Question.propTypes = {
  submit: PropTypes.func.isRequired,
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
  submit(values) {
    dispatch(submitAnswer(values.answer));
    dispatch(toggleExplanation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
