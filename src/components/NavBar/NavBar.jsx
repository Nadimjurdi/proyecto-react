import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'
export const NavBar = () => {
  return (
    <>
    <Navbar className='navbar-clase'>
          <Link to={"/"}  style={{ textDecoration: 'none', color: 'white' }}><Navbar.Brand href="#home">E-Commerce</Navbar.Brand></Link>
          <Nav className="me-auto navegador">
            <ul>
            <li><Link  style={{ textDecoration: 'none', color: 'white' }}to="/">Home</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/counter">Contador</Link></li>
            {/* Libreria usada para api pikachu */}
            {/* <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/pika">Pika</Link></li> */} 
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/cart'><CartWidget/></Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/productos/pantalon'>Pantalon</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/productos/zapatos'>Zapato</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/productos/sueter'>Sueter</Link></li>
            </ul>
          </Nav>

    </Navbar>
    </>
  )
}
