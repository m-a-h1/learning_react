import { useEffect, useState } from "react";

import styles from "./style.module.css";
import Loading from "../../components/UI/loading/Loading";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getComments = async () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments").then(async (response) => {
      const data = await response.json();
      console.log(">>>>> data: ", data);
      setComments(data.slice(0, 10));
      setLoading(false);
    });
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
          <div className={styles.comment}>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
            <div>email: {comment.email}</div>
            <p>body: {comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
