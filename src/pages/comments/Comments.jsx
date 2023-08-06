import { useEffect, useState } from "react";

import Loading from "../../components/UI/loading/Loading";
import { getCommentAction } from "../../components/api/comments/apiAction";
import CommentCard from "./components/CommentCard";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getComments = async () => {
    setLoading(true);
    const data = await getCommentAction();
    setComments(data.slice(0, 10));
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  if (loading) return <Loading />;
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}> Comments</h2>
      <div style={{ height: "600px", overflow: "auto" }}>
        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
