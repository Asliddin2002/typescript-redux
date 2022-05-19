export enum actionTypes  {
    DATA_LOADING = "DATA_LOADING",
    DATA_ADDED = "DATA_ADDED",
    DATA_ERROR = "DATA_ERROR"
}



interface stateTypes {
    data:any[],
    loading:boolean,
    error: null | string 
}

interface loadingType {
    type:actionTypes.DATA_LOADING,
    payload:boolean
} 
interface loadedType {
    type:actionTypes.DATA_ADDED,
    payload:any[]
} 
interface errorType {
    type:actionTypes.DATA_ERROR,
    payload:string
} 


export type actionTypeReducer = loadingType | loadedType |errorType



const initialState = {
    data:[],
    loading:false,
    error:""
} as stateTypes

 export const reducerRunc = (state = initialState, action: actionTypeReducer) => {
    switch(action.type){
        case actionTypes.DATA_LOADING:{
            return{...state, loading:action.payload}
        }
        case actionTypes.DATA_ADDED:{
            return{...state, loading:false, data:action.payload}
        }
        case actionTypes.DATA_ERROR:{
            return{...state, loading:false, error:action.payload}
        }
        case actionTypes.DATA_ERROR:{
            return{...state, loading:false, error:action.payload}
        }
        // case actionTypes.DATA_ERROR:{
        //     return{...state, data.filter(item => item.id !== action.payload)}
        // }
        default:
            return state
        
    }
}

 