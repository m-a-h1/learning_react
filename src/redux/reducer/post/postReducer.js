

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
}

const slice = createSlice({
    name: 'postReducer',
    initialState,
    reducers:{
        SET_POSTS: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const {SET_POSTS} = slice.actions

export default slice.reducer ;