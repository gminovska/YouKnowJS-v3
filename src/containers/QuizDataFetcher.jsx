import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchQuizRequest } from '../actions/current-quiz';
import Quiz from './Quiz';
import Loader from '../components/Loader';

class QuizDataFetcher extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    fetchData: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
  }

  render() {
    return (
      this.props.showLoader
        ? <Loader />
        : <Quiz />
    );
  }
}

const mapStateToProps = state => ({
  showLoader: !state.currentQuiz.id,
});

const mapDisptachToProps = dispatch => ({
  fetchData(id) {
    dispatch(fetchQuizRequest(id));
  },
});

export default connect(mapStateToProps, mapDisptachToProps)(QuizDataFetcher);
