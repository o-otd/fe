export interface IContentSubmitButtonProps {
  text: string;
}

export interface IGraySubmitButtonProps extends IContentSubmitButtonProps {}

export interface IFilterProps {
  filterIndex: number;
}

export interface IGenderFilterProps extends IFilterProps {}

export interface IStyleFilterProps extends IFilterProps {}

export interface IAgeFilterProps extends IFilterProps {}

export interface IColorFilterProps extends IFilterProps {}

export interface IRangeFilterProps extends IFilterProps {
  filterType: 'height' | 'weight';
}

export interface IFiltersProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBottomFilterProps extends IFiltersProps {}

export interface ILookTabItemProps {
  text: string;
  href: string;
}
