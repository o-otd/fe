import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function useAuthRedirect() {
  const navigation = useNavigate();

  const checkAuthAndProceed = (callback: () => void) => {
    const accessToken = Cookie.get('accessToken');
    if (!accessToken) {
      navigation('/signin');
    } else {
      callback();
    }
  };

  const redirectTo = (path: string) => {
    const accessToken = Cookie.get('accessToken');
    if (!accessToken) {
      navigation('/signin');
    } else {
      navigation(path);
    }
  };

  return { checkAuthAndProceed, redirectTo };
}
