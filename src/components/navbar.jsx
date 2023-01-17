import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// icons
import { BsChevronDown } from "react-icons/bs"
function NavbarP() {
  return (
    <>
      <Navbar className='mt-4' bg="light" variant="light">
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