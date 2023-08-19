
export const getPostsAction =  () => async(dispatch) =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    dispatch({type: 'setPosts',payload:data.slice(0, 10)})      
};