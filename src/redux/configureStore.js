import { applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducer/rootReducer'

export default function confStore() {


  const store = configureStore({reducer:rootReducer })

  return store
}