import { combineReducers } from "redux"

import postReducer from "./post/postReducer"
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({postReducer,  userReducer})

export default rootReducer