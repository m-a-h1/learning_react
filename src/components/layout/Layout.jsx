import { Link, Outlet } from "react-router-dom";

import styles from "./style.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <ul dir="">
          <li style={{ float: "left", marginRight: "20px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ float: "left", marginRight: "20px" }}>
            <Link to="/login">login</Link>
          </li>
          <li style={{ float: "left", marginRight: "20px" }}>
            <Link to="/comments">Comments</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.mainBody}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
