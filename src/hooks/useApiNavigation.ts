import { useNavigate } from 'react-router-dom';
import { IApiResponse } from 'types/Common';

export default function useApiNavigation<T extends IApiResponse>() {
  const navigation = useNavigate();
  const apiNavigation = (path: string, response: T) => {
    if (response.ok) {
      navigation(`${path}`, { replace: true });
    } else {
      alert(response.error);
    }
  };

  return apiNavigation;
}
