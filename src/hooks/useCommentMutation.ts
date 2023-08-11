import { useState } from 'react';
import { IComment } from 'types/Home/Confirm';

export default function useCommentMutation() {
  const [commentList, setCommentList] = useState<IComment[]>([]);

  const mutateComments = (newComments: IComment) => {
    setCommentList((prev) => [...prev, newComments]);
  };

  const mutateDeleteComments = (deleteCommentId: number) => {
    const newCommentList = commentList.filter(
      (comment) => comment.id !== deleteCommentId,
    );
    setCommentList(newCommentList);
  };

  const mutateModifyComments = (commentId: number, newContent: string) => {
    setCommentList((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, comment: newContent }
          : comment,
      ),
    );
  };

  return {
    commentList,
    mutateComments,
    setCommentList,
    mutateDeleteComments,
    mutateModifyComments,
  };
}
