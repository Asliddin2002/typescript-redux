import React from 'react'
import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import * as dataFetch from './Data' 

export const DispatchHook = () => {
    const dispatch = useDispatch()
    return bindActionCreators(dataFetch, dispatch)
}