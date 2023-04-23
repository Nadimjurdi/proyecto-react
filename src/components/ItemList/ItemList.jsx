import React from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { Item } from '../Item/Item'
import './itemlist.css'
export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
        <h3>Nuestros productos</h3>
        <div className='fila'>        
            {productos.map((item)=><Item {...item} key={item.id}/>)}
        </div>
    </div>
  )
}
