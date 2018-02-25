import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import UserForm from '../../components/forms/UserForm';

const mapStateToProps = state => ({
  showErr: state.errors.onSignup,
  errMsg: state.errors.message,
});

export default connect(mapStateToProps)(reduxForm({ form: 'login' })(UserForm));
