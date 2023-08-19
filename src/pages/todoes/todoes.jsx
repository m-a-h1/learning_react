import { useEffect, useState } from "react";
import getTodoAction from "./api/apiaction";
import style from "./style.module.css"
import Loading from "../loading"

const Todoes = () => {
    const [todo , setTodo]= useState([])
    const [loading , setloading] = useState(false)
    const GetTodo = async() =>{
        setloading(true)
        const data =  await getTodoAction()
        setTodo(data.slice(0,10))
        setloading(false)
    }
    useEffect(()=> {
        GetTodo()
    },[])
    if(loading) return <Loading/> 
    return (
        <div>
        <h2>Todoes</h2>
        <div style={{height:"500px" , overflow:"auto"}}>
        {todo.map((item) => (
             <div className={style.mainpage}>
                <span>userid:{item.userid}</span>
                <span>id:{item.id}</span>
                <span>title:{item.title}</span>
                <p>completed:{item.body}</p>
             </div>
            
        ))}
            

        </div>
    </div>
        
        
    )
}
export default Todoes ;