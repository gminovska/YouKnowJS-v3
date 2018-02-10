import React from 'react';
import PropTypes from 'prop-types';

const QuizThumbnail = ({ description, name }) => (
  <div>
    Thumbnail
    {name}
    {description}
  </div>
);

QuizThumbnail.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default QuizThumbnail;
