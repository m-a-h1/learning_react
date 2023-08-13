import {  useReducer} from "react"
const CreateUser = ({setUser , setisCreateMode}) =>{
    const defaultstate={
        id :""
        ,
        name:"" 
     }
     const reducer =(state , action) =>{
         const{type , payload}=action
         switch(type){
             case "update":
                 return {...state,...payload}
             default :
                 return state
         }
     }
     const [state , dispatch]=useReducer(reducer,defaultstate)
    const onIdChange = (e) =>{
        dispatch({type:"update",payload :{id : e.target.value}})
    }
    const onNameChange = (e) =>{
        dispatch({type:"update",payload :{name : e.target.value}})
    }
    const addUser = () =>{
        console.log(state);
        setUser((currentState)=>{
            return [...currentState,state]

        })
        setisCreateMode(false)
    }

     
    return(

        <div>
            <h2>create</h2>
            <form>
               <label> id
                <input type="text" onChange={onIdChange}></input>
                </label> 
                <label> username
                <input type="text" onChange={onNameChange}></input>
                </label> 
            </form>
            <button type="submit" onClick={addUser } >add</button>
        </div>
    )
}
export default CreateUser;