import { useState } from "react";
import styles from "./style.module.css";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onUserChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(">>>>> e ", e);
    e.preventDefault();

    console.log(">>>>> username: ", username);
    console.log(">>>>> password: ", password);
  };

  return (
    <div className={styles.container}>
      <h2>Log in</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.inputField}>
          <label>username: </label>
          <input onChange={onUserChange} />
        </div>

        <div className={styles.inputField}>
          <label>password: </label>
          <input onChange={onPasswordChange} />
        </div>

        <button type="submit" className={styles.submitButton}>
          {" "}
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
