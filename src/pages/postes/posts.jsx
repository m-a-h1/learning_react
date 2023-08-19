import { useEffect, useState } from "react"
import getPostsAction from "./api/apiaction"
import style from "./style.module.css"
import Loading from "../loading"
import CreatePost from "./component/CreatePost"

const Posts = () =>{
    const [post , setpost]= useState([])
    const [isCreateMode,setisCreateMode] = useState(false)
    const [selectedPost , setselectedPost] = useState()
   
    const [loading , setloading] = useState(false)
    
    
    
    
    const onCreateClick = () => {
        setisCreateMode(true)
    }
    const onDelet = (i) => ()=>{
        const newposts =[...post]
        newposts.splice(i,1)
        setpost(newposts)
        

    }
    const onEditClicked = (item , index)=>() =>{
        setselectedPost({...item , index})

    }
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
    if(isCreateMode || selectedPost) return <CreatePost setpost={setpost} setisCreateMode={setisCreateMode} selectedPost={selectedPost} setselectedPost={setselectedPost}/>
    return (
        <div>
            <h2>posts</h2>
            <div style={{height:"500px" , overflow:"auto"}}>
            {post.map((item , i) => (
                 <div className={style.mainpage}>
                     <button className={style.close} onClick={onDelet(i)}> X</button>
                     <button className={style.edit} onClick={onEditClicked(item , i)}> edit</button>
                    
                    <span>id:{item.id}</span>
                    
                    <p>body:{item.body}</p>
                 </div>
                
            ))}
                
                <button type="submit" className={style.button} onClick={onCreateClick}> click to add</button>
            </div>
           
        </div>
    )


}
export default Posts;