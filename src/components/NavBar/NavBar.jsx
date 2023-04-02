import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
export const NavBar = () => {
  return (
    <>
    <Navbar bg="light" variant="light" className='navbar-clase'>
        <Container className='navbar-clase'>
        <div>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav.Link href="#"><CartWidget/></Nav.Link>
        </div>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </>
  )
}
