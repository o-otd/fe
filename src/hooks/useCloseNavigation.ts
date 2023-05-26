import { useNavigate } from 'react-router-dom';

export default function useCloseNavigation() {
  const navigation = useNavigate();

  const closeNavigation = () => {
    navigation(-1);
  };

  return closeNavigation;
}
