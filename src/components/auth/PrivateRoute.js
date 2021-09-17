import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import {message} from "antd";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <>
            {message.error("Vous devez vous connecter d'abord",2.5)}
            <Redirect to="/login" />
            </>
          )
          ;
        }}
      ></Route>
    </>
  );
};

export default PrivateRoute;