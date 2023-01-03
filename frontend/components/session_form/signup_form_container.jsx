import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
  errors: Object.values(state.errors),
  formType: 'Signup'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
