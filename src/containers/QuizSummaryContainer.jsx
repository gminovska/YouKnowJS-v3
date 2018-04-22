import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetCurrentQuiz } from '../actions/current-quiz';
import QuizSummary from '../components/QuizSummary';

class QuizSummaryContainer extends React.Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
  }

  state = {
    shouldRedirect: false,
  };

  finishQuiz = () => {
    this.setState(() => ({ shouldRedirect: true }), this.props.reset);
  }
  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return <QuizSummary redirect={this.finishQuiz} />;
  }
}

const mapDispatchToProps = dispatch => ({
  reset() { dispatch(resetCurrentQuiz()); },
});

export default connect(undefined, mapDispatchToProps)(QuizSummaryContainer);
