import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Cont-navbar.css'
// icons
import { BsChevronDown } from "react-icons/bs"
function NavbarP() {
  return (
    <>
      <Navbar className=' mb-4' id='Cont-navbar' >
        <Container>
          <Navbar.Brand href="#home">Paper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='#bars'><BsChevronDown></BsChevronDown> </Nav.Link>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}



export default NavbarP