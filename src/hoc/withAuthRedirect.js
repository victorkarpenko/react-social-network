import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'} />;

            return <Component {...this.props} />
        }
    }

    const ConnectedRedirectComponent = connect(state => ({isAuth: state.auth.isAuth}), {})(RedirectComponent);

    return ConnectedRedirectComponent;
};