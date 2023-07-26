import React, { useState } from 'react';
import ConfirmWriteHeader from 'components/Home/Confirm/ConfirmWrite/ConfirmWriteHeader';
import { registerConfirm } from 'api/confirm';
import { useApi } from 'hooks/useApi';
import useApiNavigation from 'hooks/useApiNavigation';
import ConfirmWriteTextInput from 'components/Home/Confirm/ConfirmWrite/ConfirmWriteTextInput';
import ConfirmWriteVote from 'components/Home/Confirm/ConfirmWrite/ConfirmWriteVote';
import ConfirmWriteImageSlideInput from 'components/Home/Confirm/ConfirmWrite/ConfirmWriteImageSlideInput';
import { IRegisterConfirmApiResponse } from 'types/Home/Confirm';
import { IImageFile } from 'types/Common';

function ConfirmWrite() {
  const apiNavigation = useApiNavigation<IRegisterConfirmApiResponse>();
  const { execute, error } = useApi(registerConfirm);
  const [text, setText] = useState<string>('');
  const [inputImages, setInputImages] = useState<IImageFile[]>([]);

  const [firstVoteText, setFirstVoteText] = useState<string>('');
  const [secondVoteText, setSecondVoteText] = useState<string>('');

  const onClickSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      text.length === 0 ||
      inputImages.length === 0 ||
      firstVoteText === '' ||
      secondVoteText === ''
    ) {
      return;
    } else {
      const voteTypeReqs = [
        { wording: firstVoteText, order: '0' },
        { wording: secondVoteText, order: '1' },
      ];
      const response = await execute({
        content: text,
        images: inputImages,
        startDate: '20230726',
        endDate: '20230805',
        voteTypeReqs: voteTypeReqs,
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

      <ConfirmWriteVote
        firstVoteText={firstVoteText}
        setFirstVoteText={setFirstVoteText}
        secondVoteText={secondVoteText}
        setSecondVoteText={setSecondVoteText}
      />

      <ConfirmWriteImageSlideInput
        inputImages={inputImages}
        setInputImages={setInputImages}
      />
    </form>
  );
}

export default ConfirmWrite;
