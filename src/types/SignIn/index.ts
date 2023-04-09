import { UseFormRegisterReturn } from 'react-hook-form';

export interface IEmailSignInInputData {
  email: string;
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
