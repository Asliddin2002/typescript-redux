import {createStore, applyMiddleware} from "redux"
import {rooteReducer} from '../TodoCombine'
import thunk from "redux-thunk"

export const store = createStore(rooteReducer, applyMiddleware(thunk))