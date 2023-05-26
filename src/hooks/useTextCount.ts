import { useState } from 'react';

export default function useTextCount() {
  const [inputTextLength, setInputTextLength] = useState<number>(0);

  const onInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextLength(event.target.value.length);
  };

  return { inputTextLength, onInputHandler };
}
