/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ text, checked, onChange, index }) => (
  <div>
    <input
      type="radio"
      name="answer"
      value={text}
      checked={checked}
      onChange={() => onChange(index)}
    />
    <label htmlFor="answer">{text}</label>
  </div>
);

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Answer;
