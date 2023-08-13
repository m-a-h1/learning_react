import { useEffect, useState } from "react"
import getPostsAction from "./api/apiaction"
import style from "./style.module.css"
import Loading from "../loading"

const Posts = () =>{
    const [post , setpost]= useState([])
    const [loading , setloading] = useState(false)
    const GetPosts= async () =>
    {
        setloading(true)
       const data = await getPostsAction()
       setpost(data.slice(0,10))
       setloading(false)
    }
    useEffect( () =>{
        GetPosts()

    },[])
    if(loading) return <Loading/> 
    return (
        <div>
            <h2>posts</h2>
            <div style={{height:"500px" , overflow:"auto"}}>
            {post.map((item) => (
                 <div className={style.mainpage}>
                    <span>userid:{item.userid}</span>
                    <span>id:{item.id}</span>
                    <span>title:{item.title}</span>
                    <p>body:{item.body}</p>
                 </div>
                
            ))}
                

            </div>
        </div>
    )


}
export default Posts;