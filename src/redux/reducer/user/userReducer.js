

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
}

const slice = createSlice({
    name: 'userReducer',
    initialState,
    reducers:{
        SET_USERS: (state, action) => {
            state.users = action.payload
        }
    }
})

export const {SET_USERS} = slice.actions

export default slice.reducer

// const userReducer = (state=defaultState, action) => {
//     console.log('action: ', action)
//     const {type, payload} = action;

//     switch(type){
//         case 'setUsers':
//             return {...state, users: payload} 
//         default: 
//             return state
//     }
// }

// export default userReducer