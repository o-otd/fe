import React from 'react';
import styled from 'styled-components';
import { IInputProps } from 'types/SignIn';

const AuthFormInput = styled.div<{ formError: string }>`
  width: 100%;
  overflow: hidden;

  & label {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray8};
    margin-bottom: 8px;
    display: block;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};

    & > input {
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
      background-color: ${({ theme }) => theme.colors.gray3};
      padding: 16px;

      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.main};
        border-color: ${(props) =>
          props.formError ? props.theme.colors.error : props.theme.colors.main};
        outline: none;
      }

      &::placeholder {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray6};
      }
    }
  }
`;

function Input({
  label,
  type,
  register,
  errors,
  placeHolder,
  children,
}: IInputProps) {
  return (
    <>
      {type === 'email' ? (
        <AuthFormInput formError={errors!}>
          {label && <label>{label}</label>}
          <div>
            <input
              autoComplete="off"
              type="text"
              {...register}
              placeholder={placeHolder}
              autoFocus
            />
          </div>
          {children ? children : null}
        </AuthFormInput>
      ) : null}

      {type === 'password' ? (
        <AuthFormInput formError={errors!}>
          {label && <label>{label}</label>}
          <div>
            <input
              autoComplete="off"
              type={type}
              {...register}
              placeholder={placeHolder}
              autoFocus
            />
          </div>
          {children ? children : null}
        </AuthFormInput>
      ) : null}

      {type === 'nickName' ? (
        <AuthFormInput formError={errors!}>
          {label && <label>{label}</label>}
          <div>
            <input
              autoComplete="off"
              type="text"
              {...register}
              placeholder={placeHolder}
              autoFocus
            />
          </div>
          {children ? children : null}
        </AuthFormInput>
      ) : null}
    </>
  );
}

export default Input;
