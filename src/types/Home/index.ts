import { IApiResponse } from 'types/Common';

export interface ITodayCardModalProps extends ITodayCardProps {
  isOpen: boolean;
  //setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITodayCardProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILookTabItemProps {
  text: string;
  href: string;
}

export interface IMainProps {
  categories: ILookCategory[];
  baseUrl: 'tpo' | 'activity' | 'temperatures';
}

export interface ILookCategory {
  name: string;
  type: string;
  id: number;
}

export interface IConfirmWriteHeaderProps {
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IConfirmWriteTextInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export interface IConfirmWriteImageSlideInputProps {
  inputImages: IImageFile[];
  setInputImages: React.Dispatch<React.SetStateAction<IImageFile[]>>;
}

export interface IImageFile {
  file: File;
  imageUrl: string;
}

export interface IRegisterApiResponse extends IApiResponse {
  data: {
    id: number;
  };
}

export interface IRegisterApiRequest {
  content: string;
  images: IImageFile[];
  startDate: string;
  endDate: string;
}
