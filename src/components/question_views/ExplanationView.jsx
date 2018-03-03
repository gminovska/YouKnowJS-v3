import React from 'react';
import PropTypes from 'prop-types';

const ExplanationView = ({ explanationText, nextQuestion, buttonText }) => (
  <div>
    <p>{explanationText}</p>
    <button onClick={nextQuestion}>
      {buttonText}
    </button>
  </div>
);

ExplanationView.propTypes = {
  explanationText: PropTypes.string.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ExplanationView;
