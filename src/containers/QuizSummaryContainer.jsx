import React from 'react';
import { Redirect } from 'react-router-dom';

import QuizSummary from '../components/QuizSummary';

class QuizSummaryContainer extends React.Component {
  state = {
    shouldRedirect: false,
  };

  redirect = () => {
    this.setState({ shouldRedirect: true });
  }
  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return <QuizSummary redirect={this.redirect} />;
  }
}

export default QuizSummaryContainer;
