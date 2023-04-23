import React, { useEffect, useState } from 'react'
import {ImSpinner } from 'react-icons/im'
import './itemlistcontainer.css'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
export const ItemListContainer = ({Greeting}) => {

      const [Item,setItems]=useState ([])
      const [Loading,setLoading]=useState(false)
      const {categoryId}=useParams()

      useEffect(()=>{
        //Iniciamos el efecto con el loading en true 
        setLoading(true)
        pedirProductos()
        .then(res=>{
          if(categoryId){
          setItems(res.filter(prod => prod.category === categoryId))
      }else{
          setItems(res )
      }
      })
          //Consologueamos errores
          .catch((error)=>console.log(error))
          .finally(()=>{setLoading(false)})
      },[categoryId])

  return (
    <>
    <h1 className='greeting'>{Greeting}</h1>
      {
        Loading ?
        <ImSpinner className='eee'/>
        :
        <ItemList  productos={Item}/>   
      }
    </>
  )}