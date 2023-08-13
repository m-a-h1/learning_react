import { useEffect } from "react"
import {  useReducer} from "react"

const defaultstate={
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

const CreateUser = ({setUsers , setisCreateMode, selectedUser, setSelectedUser}) =>{
    
     const [state , dispatch]=useReducer(reducer,defaultstate)

    const onNameChange = (e) =>{
        dispatch({type:"update",payload :{name : e.target.value}})
    }

    const addUser = () =>{
        console.log(state);
        setUsers((currentState)=>{
            return [...currentState,{...state, id: currentState.length + 1}]
        })
        setisCreateMode(false)
    }

    const editUser = () => {
        setUsers((currentUsers) => {
            const newUsers = [...currentUsers]
            newUsers[selectedUser.index].name = state.name
            return newUsers
        })
        setSelectedUser()
    }

    const returnToList = () => {
        setisCreateMode(false)
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
                <label> name
                <input type="text" onChange={onNameChange} value={state.name}></input>
                </label> 
            </form>
            <button style={{ padding: '5px'}} type="submit" onClick={selectedUser? editUser: addUser } >{selectedUser? 'edit': 'add'}</button>
			<button style={{marginLeft: '10px', padding: '5px'}} onClick={returnToList}>return</button>
        </div>
    )
}
export default CreateUser;