import { SET_POSTS } from "./postReducer";

export const getPostsAction =  () => async(dispatch) =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    dispatch(SET_POSTS(data.slice(0,10)))      
}