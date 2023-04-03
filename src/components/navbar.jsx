import React,{useState} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Cont-navbar.css'
import { Selection } from './Select';
import ShoppinCart from './shoppinCart';
// icons
import { BsChevronDown,BsCart4 } from "react-icons/bs"


function NavbarP() {
  const [show, setShow] = useState(true);
 
  return (
    <>
      <ShoppinCart max={show}  CloseSet={setShow}/>
      <Navbar className=' mb-4' id='Cont-navbar' >
      

        <Container id='enlaces'>
          <Navbar.Brand href="#home">Paper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
        <Selection  ><BsChevronDown size={"1.3rem"} color='#000' /></Selection>
        <button type='button' className='nav-link' onClick={()=> setShow(!show)}><BsCart4 size={"1.3rem"} color='#000'/>
        </button>
      </Navbar>
    </>
  );
}



export default NavbarP