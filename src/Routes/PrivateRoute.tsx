import React from 'react';
import { Navigate } from 'react-router-dom';
import { IRouteProps } from 'types/Common';

import useGetToken from 'hooks/useGetToken';

function PrivateRoute({ component: Component }: IRouteProps) {
  const accessToken = useGetToken();

  return !accessToken ? (
    <Navigate to="/signin" replace={true} />
  ) : (
    <Component />
  );
}

export default PrivateRoute;
