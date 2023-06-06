import React from 'react';
import { Navigate } from 'react-router-dom';
import { IRouteProps } from 'types/Common';
import Cookie from 'js-cookie';

function PrivateRoute({ children }: IRouteProps) {
  const accessToken = Cookie.get('accessToken');
  return !accessToken ? (
    <Navigate to="/signin" replace={true} />
  ) : (
    <>{children}</>
  );
}

export default PrivateRoute;
