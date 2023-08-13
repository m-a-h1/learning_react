
import styles from './style.module.css';
import { Outlet, Link } from "react-router-dom";
const Layout =() =>{
    return (
        <div className={styles.container}>
          
            <nav className={styles.header}>
              <ul className={styles.lists}>
                <li className={styles.lisy}>
                  <Link  to="/" className={styles.linked}>home</Link>
                </li>
                <li className={styles.lisy}>
                  <Link  to="/login " className={styles.linked}>login</Link>
                </li>
                
                <li className={styles.lisy}>
                  <Link  to="/Blogs" className={styles.linked}>comments</Link>
                </li>
                <li className={styles.lisy}>
                  <Link  to="/albumes" className={styles.linked}>albumes</Link>
                </li>
                <li className={styles.lisy}>
                  <Link  to="/photoes" className={styles.linked}>photoes</Link>
                </li>
                <li className={styles.lisy}>
                  <Link  to="/todoes" className={styles.linked}>todos</Link>
                </li>
                <li className={styles.lisy}>
                  <Link  to="/users" className={styles.linked}>users</Link>
                </li>
                <li className={styles.lisy}>
                  <Link  to="/posts" className={styles.linked}>posts</Link>
                </li>
              </ul>
            </nav>
        
   
            <div className={styles.mainbody}> 
             <Outlet/> 
            </div>  
        </div>

    )
}
export default Layout;