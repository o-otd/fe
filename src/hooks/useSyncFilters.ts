import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { syncCurrentFilter } from 'redux/reducer/filter';
import { RootState, useAppDispatch } from 'redux/store';

export default function useSyncFilters(filterIndex: number) {
  const dispatch = useAppDispatch();
  const { filter } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    if (filter[filterIndex].length > 0) {
      dispatch(
        syncCurrentFilter({
          filterIndex: filterIndex,
          filters: filter[filterIndex],
        }),
      );
    }
  }, [dispatch, filter, filterIndex]);
}
