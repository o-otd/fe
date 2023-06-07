import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export default function useGetToken() {
  const { accessToken } = useSelector((state: RootState) => state.auth);

  return accessToken;
}
