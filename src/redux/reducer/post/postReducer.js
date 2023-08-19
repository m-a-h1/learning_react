

const defaultState = {
    posts: []
}

const postReducer = (state=defaultState, action) => {
    console.log('action: ', action)
    const {type, payload} = action;

    switch(type){
        case 'setPosts':
            return {...state, posts: payload} 
        default: 
            return state
    }
}

export default postReducer