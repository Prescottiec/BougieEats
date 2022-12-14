import { connect } from "react-redux";
import { clearErrors } from "../../actions/business_actions";
import Homepage from "./homepage";
import { logout } from "../../actions/session_actions";


const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        currentUser: state.entities.users[state.session.id]
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        logout: () => dispatch(logout())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
