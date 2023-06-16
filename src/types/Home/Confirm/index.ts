import { IApiResponse, IImageFile, IUser } from 'types/Common';

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
  onClickFunc?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  pickValue: string | undefined;
}

export interface IConfirmVoteResultList extends IConfirmVoteList {
  isSubmit: boolean;
  isShowResult: boolean;
}

export interface IGetConfirmsApiResponse extends IApiResponse {
  data: {
    datas: IGetConfirmsApiDataResponse[];
    page: IGetConfirmsApiPageResponse;
  };
}

export interface IGetConfirmsApiDataResponse {
  badCnt: number;
  bestComment: IBestComment;
  user: IUser;
  content: string;
  startDate: string;
  endDate: string;
  goodCnt: number;
  id: number;
  images: string[];
  myVoting: any;
  remains: number;
}

export interface IGetConfirmsApiPageResponse {
  size: number;
  page: number;
  total: number;
}

export interface IBestComment {
  id: number;
  like: number;
  myComment: boolean;
  myLike: boolean;
  comment: string;
  user: IUser;
}

export interface IConfirmListItemProps {
  confirmData: IGetConfirmsApiDataResponse;
}

export interface IConfirmContentCardProps {
  user: IUser;
  content: string;
  startDate: string;
  endDate: string;
  remains: number;
}

export interface IConfirmImageSlideProps {
  images: string[];
}
