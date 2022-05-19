import {combineReducers} from "redux"
import {reducerRunc} from './TodoRedux'

export const rooteReducer = combineReducers({data:reducerRunc,} )


export type rootState = ReturnType<typeof rooteReducer> 