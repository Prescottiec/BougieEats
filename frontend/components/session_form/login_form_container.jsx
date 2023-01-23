import { connect } from 'react-redux';
// import LoginForm from "./login_form";
import { login, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "Login",
    navLink: <Link to="/signup">sign up instead</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
