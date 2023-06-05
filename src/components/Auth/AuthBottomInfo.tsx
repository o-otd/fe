import React from 'react';
import styled from 'styled-components';

function AuthBottomInfo() {
  return (
    <AuthInfo>
      SNS로 로그인 및 회원가입 시 오늘의옷장의 이용약관과
      <br />
      개인정보 수집 및 이용에 동의한 것으로 간주합니다.
    </AuthInfo>
  );
}

export default AuthBottomInfo;

const AuthInfo = styled.div`
  margin-top: 9px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray6};
`;
