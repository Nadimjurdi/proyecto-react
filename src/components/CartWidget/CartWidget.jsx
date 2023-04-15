import React from 'react'
import { Button } from 'react-bootstrap'
import carrito from './assets/carrito.jpg'
import {BsFillCartPlusFill,BsFill5CircleFill} from "react-icons/bs";

import './cartwidget.css'


export const CartWidget = () => {
  return (
    <div>        
        <Button variant="outline-dark" className='carrito_boton'>
        <BsFillCartPlusFill />
        +
        <BsFill5CircleFill/>

        </Button>

</div>
  )
}
