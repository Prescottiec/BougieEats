import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import React from 'react';
// import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import SessionForm from './session_form';

// const mapStateToProps = state => ({
//   errors: Object.values(state.errors),
//   formType: 'Signup'
// })

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "Sign Up",
    navLink: <Link to="/login">log in instead</Link>
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
