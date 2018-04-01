import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// TODO: Add validation to ensure user checks at least one radio / checkbox

const AnswersList = ({ answers, multipleChoice, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {
      answers.map(({ text }) => (
        <label htmlFor="answer" key={text}>
          {text}
          <Field
            type={multipleChoice ? 'checkbox' : 'radio'}
            component="input"
            name={multipleChoice ? text : 'answer'}
            value={text}
          />
        </label>
      ))
    }
    <button type="submit">
      Submit answer
    </button>
  </form>
);

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  multipleChoice: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'answers' })(AnswersList);
