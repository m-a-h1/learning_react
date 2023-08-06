import styles from "../style.module.css";

const CommentCard = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div>id: {comment.id}</div>
      <div>name: {comment.name}</div>
      <div>email: {comment.email}</div>
      <p>body: {comment.body}</p>
    </div>
  );
};

export default CommentCard;
