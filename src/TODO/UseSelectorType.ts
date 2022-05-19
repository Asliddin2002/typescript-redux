import {useSelector, TypedUseSelectorHook} from "react-redux"
import {rootState} from './TodoCombine'

export const useTypeSelector:TypedUseSelectorHook<rootState> = useSelector