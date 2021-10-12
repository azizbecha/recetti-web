import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useAuth} from './AuthContext';
import {message} from 'antd';

const ProtectedRoute = ({component: Component, ...rest}) => {
  const {currentUser} = useAuth();

  return (
    <>
      <Route
        {...rest}
        render={props => {
          return currentUser ? (
            <>
              <Redirect to="/" />
              {message.error('Vous êtes déja connecté !', 2)}
            </>
          ) : (
            <Component {...props} />
          );
        }}
      ></Route>
    </>
  );
};

export default ProtectedRoute;
