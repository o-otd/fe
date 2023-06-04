import React, { useState } from 'react';
import ConfirmWriteHeader from 'components/Home/Confirm/ConfirmWriteHeader';
import ConfirmWriteTextInput from 'components/Home/Confirm/ConfirmWriteTextInput';
import ConfirmWriteVote from 'components/Home/Confirm/ConfirmWriteVote';
import ConfirmWriteImageSlideInput from 'components/Home/Confirm/ConfirmWriteImageSlideInput';

function ConfirmWrite() {
  const [text, setText] = useState<string>('');
  const [inputImages, setInputImages] = useState<string[]>([]);

  return (
    <form>
      <ConfirmWriteHeader />

      <ConfirmWriteTextInput text={text} setText={setText} />

      {/* <ConfirmWriteVote /> */}

      <ConfirmWriteImageSlideInput
        inputImages={inputImages}
        setInputImages={setInputImages}
      />
    </form>
  );
}

export default ConfirmWrite;
