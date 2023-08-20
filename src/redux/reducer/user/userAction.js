import { SET_USERS } from "./userReducer";

export const getUserAction =  async(dispatch) =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    dispatch(SET_USERS(data.slice(0,10)))
}
