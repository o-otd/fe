import { useSelector } from 'react-redux';
import {
  setCurrentColorFilter,
  setCurrentFilter,
  setCurrentRangeFilter,
} from 'redux/reducer/filter';
import { RootState, useAppDispatch } from 'redux/store';

export default function useSetCurrentFilters() {
  const dispatch = useAppDispatch();
  const { currentFilter, filter } = useSelector(
    (state: RootState) => state.filter,
  );

  const setCurrentFilterValues = (filterIndex: number, filterValue: string) => {
    dispatch(
      setCurrentFilter({
        filterIndex: filterIndex,
        filterValue: filterValue,
      }),
    );
  };

  const setCurrentColorFilterValues = (
    filterIndex: number,
    colorIndex: number,
  ) => {
    dispatch(
      setCurrentColorFilter({
        filterIndex: filterIndex,
        filterValue: colorIndex,
      }),
    );
  };

  const setCurrentRangeFilterValues = (
    filterIndex: number,
    leftValue: number,
    rightValue: number,
  ) => {
    dispatch(
      setCurrentRangeFilter({
        filterIndex: filterIndex,
        leftValue: leftValue,
        rightValue: rightValue,
      }),
    );
  };

  return {
    currentFilter,
    filter,
    setCurrentFilterValues,
    setCurrentColorFilterValues,
    setCurrentRangeFilterValues,
  };
}
