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

export interface IRegisterConfirmApiResponse extends IApiResponse {
  data: {
    id: number;
  };
}

export interface IRegisterConfirmRequest {
  content: string;
  images: IImageFile[];
  startDate: string;
  endDate: string;
  voteTypeReqs: { wording: string; order: string }[];
}

export interface IRegisterCommentRequest {
  confirmId: string;
  content: string;
}

export interface IRegisterCommentApiResponse extends IApiResponse {
  data: {
    commentId: number;
  };
}

export interface IConfirmVoteList {
  onClickFunc?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  pickValue: string | undefined;
  votes: IVote[];
}

export interface IConfirmVoteResultListProps extends IConfirmVoteList {
  myVoting: number | null;
}

export interface IConfirmVoteCardProps {
  remains: number;
  startDate: string;
  endDate: string;
  confirmId: number;
  myVoting: number | null;
  votes: IVote[];
}

export interface IGetConfirmsApiResponse extends IApiResponse {
  data: {
    datas: IGetConfirmsApiDataResponse[];
    page: IGetApiPageResponse;
  };
}

export interface IGetCommentsApiResponse extends IApiResponse {
  data: {
    datas: IComment[];
    page: IGetApiPageResponse;
  };
}

export interface IGetConfirmsApiDataResponse {
  bestComment: IComment;
  user: IUser;
  content: string;
  startDate: string;
  endDate: string;
  id: number;
  images: string[];
  myVoting: number | null;
  remains: number;
  votes: IVote[];
}

export interface IVote {
  voteTypeId: number;
  wording: string;
  order: number;
  count: number;
}

export interface IGetApiPageResponse {
  size: number;
  page: number;
  total: number;
}

export interface IComment {
  id: number;
  like: number;
  nested: number;
  myComment: boolean;
  registered: string;
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

export interface IConfirmCommentProps {
  bestComment?: IComment;
  confirmId: number;
}

export interface IRegisterVoteRequest {
  confirmId: number;
  voteTypeId: string;
}

export interface IGetListsRequest {
  page: string;
  listSize: string;
}

export interface IGetCommentsRequest extends IGetListsRequest {
  targetId: string;
}

export interface IGetNestedCommentsRequest extends IGetCommentsRequest {}

export interface ICommentItemProps {
  commentData: IComment;
}

export interface IConfirmHeaderProps {
  onClickFunc: () => void;
}

export interface IRegisterCommentLikeRequest {
  commentId: string;
}

export interface IRegisterCommentLikeApiResponse extends IApiResponse {
  data: null;
}

export interface IDeleteCommentLikeRequest
  extends IRegisterCommentLikeRequest {}

export interface IDeleteCommentLikeApiResponse extends IApiResponse {
  data: null;
}

export interface IConfirmWriteVoteProps {
  firstVoteText: string;
  secondVoteText: string;
  setFirstVoteText: React.Dispatch<React.SetStateAction<string>>;
  setSecondVoteText: React.Dispatch<React.SetStateAction<string>>;
}

export interface IWriteVoteInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}
