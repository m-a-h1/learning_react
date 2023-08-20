

const defaultState = {
    posts: []
}

const postReducer = (state=defaultState, action) => {
    const {type, payload} = action;

    switch(type){
        case 'setPosts':
            return {...state, posts: payload} 
        default: 
            return state
    }
}

export default postReducer