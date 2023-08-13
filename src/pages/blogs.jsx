import { useState , useEffect } from "react";

import Loading from "./loading";
import getBlogsAction from "../api/apistore";
import style from "./styl.module.css"


const Blogs = () => {
    const [blogs , setBlogs]= useState([])
    const [loading , setloading]=useState(false)
    const GetBlog = async () => {
        setloading(true)
        const data = await getBlogsAction()
        setBlogs(data.slice(0,10));
        setloading(false);
        

    }
    useEffect(() => {
        GetBlog()
    },[])
    if(loading) return <Loading/> 
    return (
        <div>
            <h2>comments</h2>
            <div  style={{height:"500px" , overflow:"auto"}}>
                {blogs.map((item) => (
                 <div className={style.mainpage}>
                    <span>id:{item.id}</span>
                    <span>name:{item.name}</span>
                    <span>email:{item.email}</span>
                    <p>body:{item.body}</p>
                 </div>
                
            ))}
            </div>
        </div>
    )
}
export default Blogs; 