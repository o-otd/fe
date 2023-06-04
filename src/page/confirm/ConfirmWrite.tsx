import React, { useState } from 'react';
import ConfirmWriteHeader from 'components/Home/Confirm/ConfirmWriteHeader';
import ConfirmWriteTextInput from 'components/Home/Confirm/ConfirmWriteTextInput';
import ConfirmWriteVote from 'components/Home/Confirm/ConfirmWriteVote';
import ConfirmWriteImageSlideInput from 'components/Home/Confirm/ConfirmWriteImageSlideInput';

function ConfirmWrite() {
  const [text, setText] = useState<string>('');
  const onChangeTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const [inputImages, setInputImages] = useState<string[]>([]);

  console.log(inputImages);
  return (
    <form>
      <ConfirmWriteHeader />

      <ConfirmWriteTextInput onChangeCallBack={onChangeTextInput} text={text} />

      {/* <ConfirmWriteVote /> */}

      <ConfirmWriteImageSlideInput
        inputImages={inputImages}
        setInputImages={setInputImages}
      />
    </form>
  );
}

export default ConfirmWrite;
