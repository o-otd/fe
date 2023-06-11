import Logo from 'components/Common/Logo';
import React, { useEffect } from 'react';
import { ReactComponent as ValidationErrorSvg } from '@svg/validation-error.svg';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../utils/index';
import { IEmailSignInInputData } from 'types/Auth';
import Input from 'components/Auth/Input';
import { RootState, useAppDispatch } from 'redux/store';
import { authLoginByEmail } from 'redux/action/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthSubmitButton from 'components/Auth/AuthSubmitButton';
import useValidErrors from 'hooks/useValidErrors';

function Member() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IEmailSignInInputData>();
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { authDone, authError } = useSelector((state: RootState) => state.auth);
  const validErrors = useValidErrors(errors);

  const onValid = (inputData: IEmailSignInInputData) => {
    dispatch(
      authLoginByEmail({
        email: inputData.email,
        password: inputData.password,
      }),
    );
  };

  useEffect(() => {
    if (authDone) {
      navigation('/', { replace: true });
    }

    if (authError) {
      setError('email', { message: authError });
    }
  }, [authDone, authError]);

  return (
    <Auth>
      <Logo />
      <h2>이메일로 로그인</h2>
      <AuthForm onSubmit={handleSubmit(onValid)}>
        <AuthFormLayout>
          <Input
            placeHolder="이메일"
            type="email"
            errors={errors.email?.message}
            register={register('email', {
              required: '이메일 ID를 입력해주세요.',
              pattern: {
                value: emailRegex,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
          />

          <Input
            placeHolder="비밀번호"
            type="password"
            errors={errors.password?.message}
            register={register('password', {
              required: '비밀번호를 입력해주세요.',
            })}
          >
            {(errors.email || errors.password) && (
              <ErrorMessage>
                <ValidationErrorSvg />
                {errors.email?.message || errors.password?.message}
              </ErrorMessage>
            )}
          </Input>
        </AuthFormLayout>

        <AuthUtill>
          <AuthSubmitButton text="로그인" isError={validErrors} />

          <RegisterButton>
            <Link to={'/signup'}>회원가입</Link>
          </RegisterButton>
        </AuthUtill>
      </AuthForm>

      <AuthFind>
        <Link to={'/reset'}>비밀번호 재설정</Link>
      </AuthFind>
    </Auth>
  );
}

export default Member;

const Auth = styled.section`
  margin-top: 24px;
  padding: 0 30px;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 25px;
  }

  & > p {
    margin-top: 22px;
    font-size: 14px;
    font-weight: 400;

    & a {
      margin-left: 15px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

const AuthForm = styled.form`
  width: 100%;
  padding: 22px 0 28px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
`;

const AuthFormLayout = styled.div`
  & > div:last-child {
    margin-top: 12px;
  }
`;

const AuthUtill = styled.div`
  margin-top: 28px;
`;

const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 400;
  margin-top: 12px;

  & svg {
    margin-right: 7px;
  }
`;

const RegisterButton = styled.div`
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.gray8};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius15};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  position: relative;

  & a {
    color: ${({ theme }) => theme.colors.gray1};
    font-size: 15px;
    font-weight: 700;
  }
`;

const AuthFind = styled.div`
  padding: 18px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray7};
`;
