
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

const CreateUser = ({setUsers ,  setIsCreateMode , selectedUser , setSelectedUser }) =>{

     const [state , dispatch]=useReducer(reducer,defaultstate)
   
    const onNameChange = (e) =>{
        dispatch({type:"update",payload :{name : e.target.value}})
    }

    const addUser = () =>{
        console.log(state);
        setUsers((currentState)=>{
            return [...currentState,{...state,id:currentState.length +1}]

        })
        setIsCreateMode(false)
    }
  
    useEffect(() => {
        if ( selectedUser ){
            dispatch({type:"update" , payload:{ name : selectedUser.name}})
        }
    } ,[selectedUser])

    const editUser = () => {
        setUsers((currentUsers) => {
            const newUsers = [...currentUsers]
            newUsers[selectedUser.index].name = state.name
            return newUsers
        })
        setSelectedUser()
    }

    const returnToList = () => {
        setIsCreateMode(false)
        setSelectedUser()
    }

    useEffect(() => {
        if(selectedUser){
            dispatch({type: "update", payload: {name: selectedUser.name}})
        }
    }, [selectedUser])

     
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