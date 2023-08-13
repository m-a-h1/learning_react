import { useEffect, useState } from "react";
import getPhotoAction from "./api/apiaction";
import style from "./style.module.css"
import Loading from "../loading"
const Photoes = () => {
    const [photo , setPhoto]= useState([])
    const [loading , setloading] = useState(false)
    const GetPhoto = async() =>{
        setloading(true)
        const data =  await getPhotoAction()
        setPhoto(data.slice(0,10))
        setloading(false)
    }
    useEffect(()=> {
        GetPhoto()
    },[])
    if(loading) return <Loading/> 
    return (
        <div>
        <h2>photos</h2>
        <div style={{height:"500px" , overflow:"auto"}}>
        {photo.map((item) => (
             <div className={style.mainpage}>
                <span>albumid:{item.albumid}</span>
                <span>id:{item.id}</span>
                <span>title:{item.title}</span>
                <p>url:{item.url}</p>
                <p>thumbnailUrl:{item.thumbnailUrl}</p>
             </div>
            
        ))}
            

        </div>
    </div>
        
        
    )
}
export default Photoes ;