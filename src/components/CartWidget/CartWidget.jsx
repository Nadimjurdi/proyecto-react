import React from 'react'
import { Button } from 'react-bootstrap'
import carrito from './assets/carrito.jpg'
import './cartwidget.css'

export const CartWidget = () => {
  return (
    <div>        
        <Button variant="outline-dark" className='carrito_boton'>
        <img src={carrito} alt="" className='carrito'/>
        5
        </Button>
</div>
  )
}
