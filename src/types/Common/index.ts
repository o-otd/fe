export interface IApiResponse {
  ok: boolean;
  code: number;
  error: string | null;
}

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

export interface IDecodeJWT {
  sub: string;
  iat: number;
  exp: number;
}

export interface IRouteProps {
  children: React.ReactNode;
}

export interface IImageFile {
  file: File;
  imageUrl: string;
}
