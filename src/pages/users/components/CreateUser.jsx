
import {  useEffect, useReducer} from "react"

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

const CreateUser = ({setUser , setisCreateMode , selectedUser , setselectedUser }) =>{

     const [state , dispatch]=useReducer(reducer,defaultstate)
   
    const onNameChange = (e) =>{
        dispatch({type:"update",payload :{name : e.target.value}})
    }
    const addUser = () =>{
        console.log(state);
        setUser((currentState)=>{
            return [...currentState,{...state,id:currentState.length +1}]

        })
        setisCreateMode(false)
    }
    const editUser = ()=>{
        
        setUser((currentUsers) => {
            const newUsers =[...currentUsers]
            newUsers[selectedUser.index].name= state.name
            return newUsers

        })
        setselectedUser() 

    }
    const returnToList = () =>{
        setisCreateMode(false)
        setselectedUser()
        
       
    }
    useEffect(() => {
        if ( selectedUser ){
            dispatch({type:"update" , payload:{ name : selectedUser.name}})
        }
    } ,[selectedUser])

     
    return(

        <div>
            <h2>create</h2>
            <form>
             
                <label> username
                <input type="text" onChange={onNameChange} value={state.name}></input>
                </label> 
            </form>
            <button type="submit" onClick={selectedUser? editUser:addUser } >{selectedUser? "edit": "add"}</button>
            <button type="submit"  onClick={ returnToList} >return</button>
        </div>
    )
}
export default CreateUser;