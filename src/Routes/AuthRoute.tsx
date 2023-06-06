import React from 'react';
import Cookie from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { IRouteProps } from 'types/Common';

function AuthRoute({ children }: IRouteProps) {
  const accessToken = Cookie.get('accessToken');
  return accessToken ? <Navigate to="/" /> : <>{children}</>;
}

export default AuthRoute;
