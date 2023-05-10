import { createSlice } from '@reduxjs/toolkit';

export interface IFilterState {
  currentFilter: number[][];
  filter: number[][];
}

const initialState: IFilterState = {
  currentFilter: [[], [], [], [], [], []],
  filter: [[], [], [], [], [], []],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentFilter: (state, action) => {
      const { filterIndex, filterValue } = action.payload;
      const age = parseInt(filterValue);
      let currentAges = [...state.currentFilter[filterIndex]];
      if (!currentAges.includes(age)) {
        currentAges.push(age);
      } else {
        const temp = currentAges.filter((ageItem) => ageItem !== age);
        currentAges = [...temp];
      }
      state.currentFilter[filterIndex] = [...currentAges];
    },

    resetFilters: (state, action) => {
      const filterIndex = action.payload;

      state.currentFilter[filterIndex] = [];
      state.filter[filterIndex] = [];
    },

    setFilters: (state, action) => {
      const filterIndex = action.payload;

      state.filter[filterIndex] = state.currentFilter[filterIndex];
    },

    syncCurrentFilter: (state, action) => {
      const syncFilters = action.payload.filters;
      const filterIndex = action.payload.filterIndex;

      state.currentFilter[filterIndex] = syncFilters;
    },

    setCurrentColorFilter: (state, action) => {
      const { filterIndex, filterValue } = action.payload;
      let clickedColors = [...state.currentFilter[filterIndex]];
      if (!clickedColors.includes(filterValue)) {
        clickedColors.push(filterValue);
      } else {
        clickedColors = clickedColors.filter((color) => color !== filterValue);
      }

      if (clickedColors.length > 3) {
        clickedColors.shift();
      }

      state.currentFilter[filterIndex] = [...clickedColors];
    },

    setCurrentRangeFilter: (state, action) => {
      const { filterIndex, leftValue, rightValue } = action.payload;
      state.currentFilter[filterIndex][0] = leftValue;
      state.currentFilter[filterIndex][1] = rightValue;
    },
  },
});

export const {
  setCurrentFilter,
  setCurrentColorFilter,
  resetFilters,
  setFilters,
  syncCurrentFilter,
  setCurrentRangeFilter,
} = filterSlice.actions;
export default filterSlice;
