import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import {
  toggleExplanation,
  submitSingleChoiceAnswer,
  submitMultipleChoiceAnswer,
} from '../actions/current-quiz';
import AnswersList from './AnswersList';

class Question extends React.Component {
  static propTypes = {
    submitSingle: PropTypes.func.isRequired,
    submitMultiple: PropTypes.func.isRequired,
    question: PropTypes.shape({
      answers: PropTypes.array,
      explanation: PropTypes.string,
      multipleChoice: PropTypes.bool,
      text: PropTypes.string,
    }).isRequired,
  }

  validateSingle = (values) => {
    try {
      this.props.submitSingle(values);
    } catch (err) {
      throw new SubmissionError({ answer: 'No answer error', _error: 'Please select an answer' });
    }
  }

  validateMultiple = (values) => {
    if (Object.keys(values).length !== 0) {
      this.props.submitMultiple(values);
    } else {
      throw new SubmissionError({ answer: 'No answer error', _error: 'Please select an answer' });
    }
  }

  render() {
    const { question } = this.props;
    return (
      <div>
        <p>{question.text}</p>
        <AnswersList
          answers={question.answers}
          multipleChoice={question.multipleChoice}
          onSubmit={question.multipleChoice ? this.validateMultiple : this.validateSingle}
        />
      </div>
    );
  }
}

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
