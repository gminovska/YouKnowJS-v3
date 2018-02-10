import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import QuizThumbnail from './QuizThumbnail';

const QuizGrid = ({ quizzes }) => (
  <div>
    {quizzes.map(quiz => (
      <QuizThumbnail
        key={quiz.id}
        description={quiz.description}
        name={quiz.name}
      />
    ))}
  </div>
);

QuizGrid.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  quizzes: state.quizzes,
});

export default connect(mapStateToProps)(QuizGrid);
