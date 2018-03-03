import React from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';

const AnswersView = ({
  questionText, answers, checked, handleChange, seeExplanation,
}) => (
  <div>
    <p>{questionText}</p>
    {answers.map((answer, index) => (
      <Answer
        key={answer.text}
        index={index}
        text={answer.text}
        checked={checked[index]}
        onChange={handleChange}
      />
    ))}
    <button onClick={seeExplanation}>
      SUBMIT
    </button>
  </div>
);

AnswersView.propTypes = {
  questionText: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  checked: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired,
  seeExplanation: PropTypes.func.isRequired,
};

export default AnswersView;
