import React, { useState } from 'react';
import { registerConfirm } from 'api/confirm';
import { useApi } from 'hooks/useApi';
import useApiNavigation from 'hooks/useApiNavigation';
import { IRegisterConfirmApiResponse } from 'types/Home/Confirm';
import { IImageFile } from 'types/Common';
import {
  ConfirmCalender,
  ConfirmWriteHeader,
  ConfirmWriteImageSlideInput,
  ConfirmWriteTextInput,
  ConfirmWriteVote,
} from 'components/Home/Confirm/ConfirmWrite';

function ConfirmWrite() {
  const apiNavigation = useApiNavigation<IRegisterConfirmApiResponse>();
  const { execute, error } = useApi(registerConfirm);
  const [text, setText] = useState<string>('');
  const [inputImages, setInputImages] = useState<IImageFile[]>([]);

  const [firstVoteText, setFirstVoteText] = useState<string>('');
  const [secondVoteText, setSecondVoteText] = useState<string>('');
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleDateButton = (buttonType: string) => {
    setActiveButton(buttonType);
    setIsCalenderOpen(true);
  };

  const handleDateSelect = (date: string) => {
    if (activeButton === 'start') {
      setStartDate(date);
    } else if (activeButton === 'end') {
      setEndDate(date);
    }

    setIsCalenderOpen(false);
  };

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
    <>
      <form>
        <ConfirmWriteHeader onSubmit={onClickSubmit} />

        <ConfirmWriteTextInput
          text={text}
          setText={setText}
          onClickDate={handleDateButton}
          startDate={startDate}
          endDate={endDate}
        />

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

      {isCalenderOpen && (
        <ConfirmCalender
          onClose={setIsCalenderOpen}
          onSelect={handleDateSelect}
          date={new Date()}
        />
      )}
    </>
  );
}

export default ConfirmWrite;
