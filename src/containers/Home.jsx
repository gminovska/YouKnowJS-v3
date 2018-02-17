import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import QuizGrid from '../components/QuizGrid';
import Loader from '../components/Loader';
import { fetchQuizzesRequest } from '../actions/quizzes';

class Home extends React.Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  componentDidMount() {
    if (this.props.data.length === 0) {
      this.props.fetchData();
    }
  }

  render() {
    return (
      this.props.showLoader
        ? <Loader />
        : <QuizGrid />
    );
  }
}

const mapStateToProps = state => ({
  showLoader: state.loaders.onQuizzes,
  data: state.quizzes,
});

const mapDispatchToProps = dispatch => ({
  fetchData() {
    dispatch(fetchQuizzesRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
