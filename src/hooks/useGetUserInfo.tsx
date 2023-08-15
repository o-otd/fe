import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IDecodeJWT } from 'types/Common';

export default function useGetUserInfo() {
  let userInfo: IDecodeJWT | null = null;
  const { accessToken } = useSelector((state: RootState) => state.auth);

  if (accessToken) {
    userInfo = jwtDecode(accessToken);
  }
  return userInfo;
}
