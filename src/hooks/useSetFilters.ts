import { resetFilters, setFilters } from 'redux/reducer/filter';
import { useAppDispatch } from 'redux/store';

export default function useSetFilters() {
  const dispatch = useAppDispatch();

  const resetFilter = (filterIndex: number) => {
    dispatch(resetFilters(filterIndex));
  };

  const setFilter = (filterIndex: number) => {
    dispatch(setFilters(filterIndex));
  };

  return { setFilter, resetFilter };
}
