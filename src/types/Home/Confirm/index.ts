import { IApiResponse, IImageFile } from 'types/Common';

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

export interface IGetNestedCommentsRequest {
  targetId: number;
  page: {
    size: number;
    page: number;
  };
}

export interface IConfirmVoteList {
  onClickFunc: (event: React.MouseEvent<HTMLButtonElement>) => void;
  pickValue: string | undefined;
}
