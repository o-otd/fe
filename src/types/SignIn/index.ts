export interface IEmailSignInInputData {
  email: string;
  password: string;
}

export interface IEmailSignUpInputData extends IEmailSignInInputData {
  passwordCheck: string;
  nickName: string;
}
