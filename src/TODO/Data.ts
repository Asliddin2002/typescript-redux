import {Dispatch} from "redux"
import {actionTypeReducer, actionTypes} from './TodoRedux'
import axios from 'axios'

export const dataFetch = () => {
    return async(dispatch:Dispatch<actionTypeReducer>) => {
        try{
            dispatch({type:actionTypes.DATA_LOADING, payload:true})
            const res = await axios.get("https://alibaraka.pythonanywhere.com/api/products")
            dispatch({type:actionTypes.DATA_ADDED, payload:res.data})
        }
        catch(error){
            dispatch({type:actionTypes.DATA_ERROR, payload:"Oops, something went Wrong - 404"})
        }
    }
}