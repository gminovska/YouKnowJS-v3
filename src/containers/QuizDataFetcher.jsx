import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchQuizRequest } from '../actions/current-quiz';
import Loader from '../components/Loader';
import QuizData from '../components/QuizData';

class QuizDataFetcher extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    fetchData: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isFirstRender: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchData(id);
    // A hack to avoid rendering <QuizData> on the very first render.
    // See https://github.com/reactjs/react-redux/issues/210
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ isFirstRender: false });
    /* eslint-enable */
  }

  render() {
    return (
      this.props.showLoader || this.state.isFirstRender
        ? <Loader />
        : <QuizData />
    );
  }
}

const mapStateToProps = state => ({
  showLoader: state.loaders.onCurrentQuiz,
});

const mapDisptachToProps = dispatch => ({
  fetchData(id) {
    dispatch(fetchQuizRequest(id));
  },
});

export default connect(mapStateToProps, mapDisptachToProps)(QuizDataFetcher);
