import { useState } from 'react';
import { IComment } from 'types/Home/Confirm';

export default function useCommentMutation() {
  const [commentList, setCommentList] = useState<IComment[]>([]);

  const mutateComments = (newComments: IComment) => {
    setCommentList((prev) => [newComments, ...prev]);
  };

  return { commentList, mutateComments, setCommentList };
}
