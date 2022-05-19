import {useTypeSelector} from './UseSelectorType'
import React,{useEffect}  from "react"
import {dataFetch} from './Data'
import {DispatchHook} from './UseDispatchHook'


const ItemList = () => {
const {data, loading, error} = useTypeSelector(state => state.data)


const {dataFetch}  = DispatchHook()
useEffect(() => {
    dataFetch()
}, [])


    return(
        <>
        {
            data.map(item => (
                <h1 key = {item.id}>${item.id}. ${item.name}</h1>
            ))
        }
        </>
    )
}

export default ItemList