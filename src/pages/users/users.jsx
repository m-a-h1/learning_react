import { useEffect, useState } from "react"
import Loading from "../loading"
import getUserAction from "./api/apiaction"
import style from "./style.module.css"
import styles from "./button.module.css"
import CreateUser from "./components/CreateUser"

const Users = () => {
    const [user , setUser]= useState([])
    const [isCreateMode , setisCreateMode] = useState(false)

    
    const [loading , setloading] = useState(false)
    const onCreateClick = () => {
        setisCreateMode(true)
    }
    const GetUser = async() =>{
        setloading(true)
        const data =  await getUserAction()
        setUser(data.slice(0,10))
        setloading(false)
    }
    const onDelet = (item) =>() =>{
        const newUsers = []
        user.forEach(userItem => {
            if (userItem.id===item.id){
                item.id.splice(userItem.id===item.id ,1)
                

            }
        })
        

    }

    useEffect(()=> {
        GetUser()
    },[])
    if(loading) return <Loading/> 
    if (isCreateMode) return <CreateUser setUser={setUser} setisCreateMode={setisCreateMode} />
    return (
        <div>
            <h2>users</h2>
            <div  style={{height:"500px" , overflow:"auto"}}>
                {user.map((item) => (
                    
                 <div className={style.mainpage}>
                     <button className={style.close}onClick={onDelet(item)}> X</button>
                    <span>id: {item.id}</span>
                    <br></br>
                    <span>name: {item.name}</span>
                    
                    
                  
                    
                 </div>
                 
             
                
            ))}
            
            <button type="submit" className={styles.button} onClick={onCreateClick }>click to add</button>
            </div>
            
        </div>
        
    )
}
export default Users ;