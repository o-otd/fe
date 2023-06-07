import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'redux/store';

export default function useAuthRedirect() {
  const navigation = useNavigate();
  const { accessToken } = useSelector((state: RootState) => state.auth);

  const checkAuthAndProceed = (callback: () => void) => {
    if (!accessToken) {
      navigation('/signin');
    } else {
      callback();
    }
  };

  const redirectTo = (path: string) => {
    if (!accessToken) {
      navigation('/signin');
    } else {
      navigation(path);
    }
  };

  return { checkAuthAndProceed, redirectTo };
}
