import { useState } from 'react'

import './App.css'

// bootstrap importaciones
import NavbarP from './components/navbar.jsx'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'
function App() {

  return (
    <div className="App">
      <Container className='cont-img-portada d-flex ' >
        <Image src={`src/assets/img/comida-portada.jpg`} alt='Portada'  fluid={true} className="portada"/>
        <div className='container'>
          <Image src={`src/assets/img/me.jpg`}  alt='perfil' fluid={true} className="ImgPerfil"/>
        </div>
      </Container>

      <NavbarP></NavbarP>
    </div>
  )
}

export default App
