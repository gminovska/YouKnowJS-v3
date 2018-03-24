import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleExplanation } from '../actions/current-quiz';

const Question = ({ question, showExplanation }) => (
  <div>
    <p>{question.text}</p>
    <div>
      {
        question.answers.map(answer => (
          <label htmlFor="answer">
            {answer.text}
            <input type="radio" name="answer" />
          </label>
        ))
      }
    </div>
    <button onClick={showExplanation}>
      Submit answer
    </button>
  </div>
);

Question.propTypes = {
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
  showExplanation() {
    dispatch(toggleExplanation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
