
import styles from './style.module.css';
const Login = () =>{
  
    return (
        <div  className = {styles.contain}> 
            <h2 className={styles.h2}>log in </h2>
            <form>
                <div className={styles.inner}>
                    <label className={styles.label}>username </label>
                    <input placeholder='user name'/>
                </div>
                <div className={styles.inner}>
                    <lable className={styles.label}>password </lable>
                    <input placeholder='password' />
                </div>
                <button type='submit ' className={styles.button}>click</button>
                
            </form>
           
        </div>
    )
}
export default Login;