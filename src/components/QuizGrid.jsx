import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuizThumbnail from './QuizThumbnail';

const QuizGrid = ({ quizzes }) => (
  <div className="quiz-grid__container">
    {quizzes.map(quiz => (
      <div className="quiz-grid__element" key={quiz.id} mobile={16} tablet={8} computer={4}>
        <QuizThumbnail
          id={quiz.id}
          description={quiz.description}
          name={quiz.name}
          img={quiz.imgUrl}
        />
      </div>
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
