import { UseFormRegisterReturn } from 'react-hook-form';
import { IApiResponse } from 'types/Common';

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

export interface IJoinByEmailData extends ILogInByEmailData {
  name: string;
}

export interface ILogInByEmailData {
  email: string;
  password: string;
}

export interface IJoinByEmailApiResponse extends IApiResponse {
  data: null;
}

export interface IAuthLogInByEmailResponse extends IApiResponse {
  data: {
    expiration: number;
    token: string;
  };
}

export interface IAuthSelectButtonProps {
  text: string;
  href: string;
  icon: React.ReactNode;
}
