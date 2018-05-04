import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import QuizThumbnail from './QuizThumbnail';

const QuizGrid = ({ quizzes }) => (
  <Grid container stackable columns={3}>
    {quizzes.map(quiz => (
      <Grid.Column key={quiz.id}>
        <QuizThumbnail
          id={quiz.id}
          description={quiz.description}
          name={quiz.name}
          img={quiz.imgUrl}
        />
      </Grid.Column>
    ))}
  </Grid>
);

QuizGrid.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  quizzes: state.quizzes,
});

export default connect(mapStateToProps)(QuizGrid);
