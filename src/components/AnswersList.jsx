import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const AnswersList = ({ answers, multipleChoice, handleSubmit, error }) => (
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
    {error && <p>{error}</p>}
    <button type="submit">
      Submit answer
    </button>
  </form>
);

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  multipleChoice: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};
AnswersList.defaultProps = {
  error: undefined,
};

export default reduxForm({ form: 'answers' })(AnswersList);
