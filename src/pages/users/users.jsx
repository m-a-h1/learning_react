import { useEffect, useState } from "react"
import Loading from "../loading"
import style from "./style.module.css"
import styles from "./button.module.css"
import CreateUser from "./components/CreateUser"
import { getUserAction } from "../../redux/reducer/user/userAction"
import { useDispatch, useSelector } from "react-redux"

const Users = () => {
    const dispatch = useDispatch()
    
    const [users , setUsers]= useState([])
    const [isCreateMode , setIsCreateMode] = useState(false)
    const [selectedUser , setSelectedUser]= useState ()

    const currentUsers = useSelector(state => state.userReducer.users)
    
   
 
   const [loading , setloading] = useState(false)

    const onCreateClick = () => {
        setIsCreateMode(true)
    }

    const GetUser = async() =>{
        setloading(true)
        dispatch(getUserAction)
        setloading(false)
    }
    const onDelet = (i) => ()=>{
        const newUsers =[...users]
        newUsers.splice(i,1)
        setUsers(newUsers)
    }   

    const onEditClicked = (item , index)=>() =>{
        setSelectedUser({...item , index})
    }

    useEffect(() => {setUsers(currentUsers)}, [currentUsers])
  

    useEffect(()=> {
        GetUser()
    },[])

    if(loading) return <Loading/> 
    if (isCreateMode || selectedUser) return <CreateUser setUsers={setUsers} setIsCreateMode={setIsCreateMode}   setSelectedUser={setSelectedUser} selectedUser ={selectedUser }/>
    return (
        <div>
            <h2>users</h2>
            <div  style={{height:"500px" , overflow:"auto"}}>
                {users.map((item , i) => (
                    
                 <div className={style.mainpage}>
                     <button className={style.close}  onClick={onDelet(i)}> X</button>
                     <button className={style.closes}  onClick={onEditClicked(item , i)}> edit</button>
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