import React from 'react';
import { Navigate } from 'react-router-dom';
import { IRouteProps } from 'types/Common';

import useGetToken from 'hooks/useGetToken';

function PrivateRoute({ children }: IRouteProps) {
  const accessToken = useGetToken();

  return !accessToken ? (
    <Navigate to="/signin" replace={true} />
  ) : (
    <>{children}</>
  );
}

export default PrivateRoute;
