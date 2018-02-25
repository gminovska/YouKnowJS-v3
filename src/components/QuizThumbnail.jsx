import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuizThumbnail = ({ description, name, id }) => (
  <div>
    Thumbnail
    <Link to={`/quiz/${id}`}>
      {name}
    </Link>
    {description}
  </div>
);

QuizThumbnail.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default QuizThumbnail;
