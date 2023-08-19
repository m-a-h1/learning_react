import { combineReducers } from "redux"

import postReducer from "./post/postReducer"

const rootReducer = combineReducers({postReducer})

export default rootReducer