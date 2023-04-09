import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import axios from 'axios';

const Wrapper = styled.form`
  margin: 10rem auto;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & input {
    color: black;
    &::placeholder {
      color: black;
    }
  }

  & button {
    margin-top: 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

function SampleForm() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState<any>();

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
    event.target.value = '';
  };

  const onValid = (data: any) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('image', image);

    for (const value of formData.values() as any) {
      console.log(value); //formdata 객체 값 확인
    }

    axios.post('http://localhost:8080/api/upload', {
      formData,
    });
  };

  return (
    <Wrapper encType="multipart/form-data" onSubmit={handleSubmit(onValid)}>
      <InputContainer>
        <label>이메일</label>
        <input type="email" {...register('email')} placeholder="이메일 입력" />
      </InputContainer>

      <InputContainer>
        <label>비밀번호</label>
        <input
          type="password"
          {...register('password')}
          placeholder="비밀번호 입력"
        />
      </InputContainer>

      <InputContainer>
        <label>이미지</label>
        <input accept="image/*" type="file" onChange={onChangeImage} />
      </InputContainer>

      <button>제출</button>
    </Wrapper>
  );
}

export default SampleForm;
