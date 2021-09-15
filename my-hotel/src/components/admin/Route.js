import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "./Auth";

const Route = ({ component: Component, ...rest }) => {
    const { admin } = useContext(Auth);
    return <Route {...rest} render={(props) => (admin ? <Component {...rest} {...props} /> : <Redirect to="/" />)} />;
};

export default Route;