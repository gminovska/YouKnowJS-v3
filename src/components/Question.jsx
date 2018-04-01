import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  toggleExplanation,
  submitSingleChoiceAnswer,
  submitMultipleChoiceAnswer,
} from '../actions/current-quiz';
import AnswersList from './AnswersList';

const Question = ({ question, submitSingle, submitMultiple }) => (
  <div>
    <p>{question.text}</p>
    <AnswersList
      answers={question.answers}
      multipleChoice={question.multipleChoice}
      onSubmit={question.multipleChoice ? submitMultiple : submitSingle}
    />
  </div>
);

Question.propTypes = {
  submitSingle: PropTypes.func.isRequired,
  submitMultiple: PropTypes.func.isRequired,
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
  submitSingle(values) {
    dispatch(submitSingleChoiceAnswer(values.answer));
    dispatch(toggleExplanation());
  },
  submitMultiple(values) {
    dispatch(submitMultipleChoiceAnswer(values));
    dispatch(toggleExplanation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
