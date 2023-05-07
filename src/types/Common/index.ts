export interface IContentSubmitButtonProps {
  text: string;
}

export interface IGraySubmitButtonProps extends IContentSubmitButtonProps {}

export interface IRangeFilterProps {
  filterType: 'height' | 'weight';
}

export interface IFiltersProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBottomFilterProps extends IFiltersProps {}
