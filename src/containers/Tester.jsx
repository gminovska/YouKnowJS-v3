import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchQuizzesRequest } from '../actions/quizzes';

class Tester extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fetch}> CLICK ME</button>
      </div>
    );
  }
}

Tester.propTypes = {
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuizzesRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tester);
