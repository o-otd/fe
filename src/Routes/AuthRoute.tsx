import React from 'react';
import Cookie from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { IAuthRouteProps } from 'types/Common';

function AuthRoute({ children }: IAuthRouteProps) {
  const accessToken = Cookie.get('accessToken');
  return accessToken ? <Navigate to="/" /> : <>{children}</>;
}

export default AuthRoute;
