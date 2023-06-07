import React from 'react';
import { Navigate } from 'react-router-dom';
import { IRouteProps } from 'types/Common';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function AuthRoute({ children }: IRouteProps) {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  return accessToken ? <Navigate to="/" /> : <>{children}</>;
}

export default AuthRoute;
