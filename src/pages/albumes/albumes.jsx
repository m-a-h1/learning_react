import { useEffect, useState } from "react";
import getAlbumAction from "./api/apiaction";
import style from "./style.module.css"
import Loading from "../loading" 

const Albums = () => {
    const [album , setalbum]= useState([])
    const [loading , setloading] = useState(false)
    const GetAlbum = async() =>{
        setloading(true)
        const data =  await getAlbumAction()
        setalbum(data.slice(0,10))
        setloading(false)
    }
    useEffect(()=> {
        GetAlbum()
    },[])
    if(loading) return <Loading/> 
    return (
        <div>
        <h2>Albums</h2>
        <div style={{height:"500px" , overflow:"auto"}}>
        {album.map((item) => (
             <div className={style.mainpage}>
                <span>userid:{item.userid}</span>
                <span>id:{item.id}</span>
                <span>title:{item.title}</span>
               
             </div>
            
        ))}
            

        </div>
    </div>
        
        
    )
}
export default Albums ;