import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { IRouteProps } from 'types/Common';

import useGetToken from 'hooks/useGetToken';

function AuthRoute({ component: Component }: IRouteProps) {
  const accessToken = useGetToken();

  return accessToken ? <Navigate to="/" /> : <Component />;
}

export default AuthRoute;
