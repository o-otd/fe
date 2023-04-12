import { UseFormRegisterReturn } from 'react-hook-form';

export interface IResetEmailInputData {
  email: string;
}

export interface IEmailSignInInputData extends IResetEmailInputData {
  password: string;
}

export interface IEmailSignUpInputData extends IEmailSignInInputData {
  passwordCheck: string;
  nickName: string;
}

export interface IInputProps {
  label?: string;
  placeHolder: string;
  type: 'email' | 'password' | 'nickName';
  register: UseFormRegisterReturn;
  errors?: string;
  children?: React.ReactNode;
}

export interface IAuthJoinByEmailData {
  email: string;
  name: string;
  password: string;
}

export interface IApiResponse {
  ok: boolean;
  code: number;
  error: string | null;
}

export interface IAuthJoinByEmailResponse extends IApiResponse {
  data: any;
}
