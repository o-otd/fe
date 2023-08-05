import { useState } from 'react';
import { IComment } from 'types/Home/Confirm';

export default function useCommentMutation() {
  const [commentList, setCommentList] = useState<IComment[]>([]);

  const mutateComments = (newComments: IComment) => {
    setCommentList((prev) => [newComments, ...prev]);
  };

  const mutateDeleteComments = (deleteCommentId: number) => {
    const newCommentList = commentList.filter(
      (comment) => comment.id !== deleteCommentId,
    );
    setCommentList(newCommentList);
  };

  return { commentList, mutateComments, setCommentList, mutateDeleteComments };
}
