import { useState } from 'react';

export default function useLikeMutation(myLike: boolean, likes: number) {
  const [isLike, setIsLike] = useState(myLike);
  const [like, setLike] = useState(likes);

  const mutateIsLike = () => {
    setIsLike((prev) => !prev);
  };

  const mutateLike = (count: number) => {
    setLike((prev) => prev + count);
  };

  return { isLike, like, mutateIsLike, mutateLike };
}
