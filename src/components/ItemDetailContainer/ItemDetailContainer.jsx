import React, {useState, useEffect } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ImSpinner } from 'react-icons/im'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
export const ItemDetailContainer= () => {

    const [Item,setItem]=useState(null)
    const[loading,setLoading]=useState(false)
    // const param=useParams()

    const {itemId}=useParams()

    useEffect(()=>{
        setLoading(true)
        pedirProductos('1')
            .then(res=>{
                setItem(res.find(prod=> prod.id=== Number(itemId)))   
            })
            .catch((error)=>console.log(error))
            .finally(()=>{
                setLoading(false)
            })

    },[itemId])
  return (
    <section>
        {
            loading?<ImSpinner/>
            :<ItemDetail {...Item}/>
        }



    </section>
  )
}
