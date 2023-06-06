import React, { useState } from 'react';
import ConfirmWriteHeader from 'components/Home/Confirm/ConfirmWriteHeader';
import ConfirmWriteTextInput from 'components/Home/Confirm/ConfirmWriteTextInput';
import ConfirmWriteVote from 'components/Home/Confirm/ConfirmWriteVote';
import ConfirmWriteImageSlideInput from 'components/Home/Confirm/ConfirmWriteImageSlideInput';
import { registerConfirm } from 'api/confirm';
import { IImageFile, IRegisterApiResponse } from 'types/Home';
import { useApi } from 'hooks/useApi';
import useApiNavigation from 'hooks/useApiNavigation';

function ConfirmWrite() {
  const apiNavigation = useApiNavigation<IRegisterApiResponse>();
  const { execute, error } = useApi(registerConfirm);
  const [text, setText] = useState<string>('');
  const [inputImages, setInputImages] = useState<IImageFile[]>([]);

  const onClickSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (text.length === 0 || inputImages.length === 0) {
      return;
    } else {
      const response = await execute({
        content: text,
        images: inputImages,
        startDate: '7/2',
        endDate: '7/3',
      });

      if (response && response.ok) {
        apiNavigation('/confirm', response);
      }
    }
  };

  return (
    <form>
      <ConfirmWriteHeader onSubmit={onClickSubmit} />

      <ConfirmWriteTextInput text={text} setText={setText} />

      <ConfirmWriteVote />

      <ConfirmWriteImageSlideInput
        inputImages={inputImages}
        setInputImages={setInputImages}
      />
    </form>
  );
}

export default ConfirmWrite;
