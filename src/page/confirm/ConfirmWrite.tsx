import React from 'react';
import ConfirmWriteHeader from 'components/Home/Confirm/ConfirmWriteHeader';
import ConfirmWriteTextInput from 'components/Home/Confirm/ConfirmWriteTextInput';
import ConfirmWriteVote from 'components/Home/Confirm/ConfirmWriteVote';
import ConfirmWriteImageSlideInput from 'components/Home/Confirm/ConfirmWriteImageSlideInput';

function ConfirmWrite() {
  return (
    <form>
      <ConfirmWriteHeader />

      <ConfirmWriteTextInput />

      <ConfirmWriteVote />

      <ConfirmWriteImageSlideInput />
    </form>
  );
}

export default ConfirmWrite;
