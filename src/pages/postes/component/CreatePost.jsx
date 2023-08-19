import {  useEffect, useReducer} from "react"
const defaultstate={
    
    body:"" 
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
const CreatePost = ({setpost , setIsCreateMode ,selectedPost ,  setSelectedPost})=>{
   
       
        const [state , dispatch]=useReducer(reducer,defaultstate)

       
        const onNameChange = (e) =>{
            dispatch({type:"update",payload :{body : e.target.value}})
        }
        const addPost =() =>{
            console.log(state)
            setpost((CurrentState) =>{
                return [...CurrentState,{...state,id:CurrentState.length+1}]

            })
            setIsCreateMode(false)
        }
        const editPost = ()=>{
        
            setpost((currentUsers) => {
                const newUsers =[...currentUsers]
                newUsers[selectedPost.index].body= state.body
                return newUsers
    
            })
            setSelectedPost() 
    
        }
        const returnToList = () =>{
            setIsCreateMode(false)
            setSelectedPost()
            
           
        }
        useEffect(() => {
            if ( selectedPost ){
                dispatch({type:"update" , payload:{ body : selectedPost.body}})
            }
        } ,[selectedPost])
    
        return( <div>
            <h2>create</h2>
            <form>
            
                <label> body
                <input type="text" onChange={onNameChange} value={state.body} ></input>
                </label> 
            </form>
            <button type="submit"  onClick={ selectedPost?editPost : addPost }>{selectedPost? "edit" : "add"}</button>
            <button type="submit"  onClick={ returnToList} >return</button>
        </div>)

        
        
            
           
            
        
    }    
export default CreatePost;