import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ErrorMessage = ({ msg }) => (
  <div>
    {msg}
  </div>
);

ErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  msg: state.errors.message,
});

export default connect(mapStateToProps)(ErrorMessage);
