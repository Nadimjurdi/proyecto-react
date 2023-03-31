import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
export const NavBar = () => {
  return (
    <div className='menu'>
        <h1>E-commerce</h1>
        <CartWidget/>
        <p>Enlace 1</p>
        <p>Enlace 2</p>
        <p>Enlace 3</p>
    </div>
  )
}
