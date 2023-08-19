import { useEffect, useState } from "react"
import style from "./style.module.css"
import Loading from "../loading"
import CreatePost from "./component/CreatePost"
import { useDispatch, useSelector } from "react-redux"
import { CLOSING } from "ws"
import { getPostsAction } from "../../redux/reducer/post/postAction"

const Posts = () =>{
    const dispatch = useDispatch()

    const currentPosts = useSelector((state) => state.postReducer.posts)
    
    const [post , setPost]= useState([])
    const [isCreateMode,setIsCreateMode] = useState(false)
    const [selectedPost , setSelectedPost] = useState()
   
    const [loading , setloading] = useState(false)
    
    
    const onCreateClick = () => {
        setIsCreateMode(true)
    }
    const onDelet = (i) => ()=>{
        const newposts =[...post]
        newposts.splice(i,1)
        setPost(newposts)
        

    }
    const onEditClicked = (item , index)=>() =>{
        setSelectedPost({...item , index})

    }
    const GetPosts= async () =>
    {
        setloading(true)
        dispatch(getPostsAction())
    //    setpost(data.slice(0,10))
       setloading(false)
    }
    useEffect( () =>{
        GetPosts()
    },[])

    useEffect(() => {
        setPost(currentPosts)
    }, [currentPosts])
    
    if(loading) return <Loading/> 
    if(isCreateMode || selectedPost) return <CreatePost setpost={setPost} setIsCreateMode={setIsCreateMode} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
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