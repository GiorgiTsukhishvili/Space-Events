import { useEffect, useState } from "react";

import CommentList, { CommentListProps } from "./CommentLits";
import NewComment from "./NewComment";

const Comments = ({ eventId }: { eventId: string }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentListProps[]>([]);

  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + eventId)
        .then((res) => res.json())
        .then((data) => setComments(data.data.comments));
    }
  }, [showComments, eventId]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData: {
    email: string;
    text: string;
    name: string;
  }) => {
    // send data to API
  };

  return (
    <section className="my-[3rem] text-center">
      <button
        onClick={toggleCommentsHandler}
        className="py-1 px-4 bg-purple-600 text-white rounded-[8px]"
      >
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && comments.length > 0 && <CommentList items={comments} />}
    </section>
  );
};

export default Comments;
