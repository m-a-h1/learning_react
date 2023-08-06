import { useReducer, useState } from "react";
import styles from "./style.module.css";

const defaultState = {
  name: "",
  password: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "update":
      return { ...state, ...payload };
    case "replace":
      return payload;
    default:
      return payload;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const onUserChange = (e) => {
    // setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    // setPassword(e.target.value);
    // setUser({...user, password: e.target.value})
    dispatch({ type: "update", payload: { password: e.target.value } });
  };

  const onSubmit = (e) => {
    console.log(">>>>> e ", e);
    e.preventDefault();
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
