import { useState } from 'react';

export default function useTextInput() {
  const [inputTextLength, setInputTextLength] = useState<number>(0);
  const [commentContent, setCommentContent] = useState<string>('');

  const onInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextLength(event.target.value.length);
    setCommentContent(event.target.value);
  };

  const clearCommentContent = () => {
    setCommentContent('');
    setInputTextLength(0);
  };

  return {
    inputTextLength,
    commentContent,
    onInputHandler,
    clearCommentContent,
    setCommentContent,
    setInputTextLength,
  };
}
