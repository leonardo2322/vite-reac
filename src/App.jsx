import { useEffect, useState } from 'react'

import './App.css'

// bootstrap importaciones
import NavbarP from './components/navbar.jsx'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'
import Acordions from './components/Acordion'
import Footer from './components/footer'
import HelperHttp from './helpers/requests'
function App() {
  let api = HelperHttp() 
  let url = "http://localhost:5000/frutas"
  const [db,setDb] = useState([])
  useEffect(()=>{
    api.get(url).then((res)=>{
      console.log(res)
      if(!res.err){
        setDb(res)
      }else{
        setDb([])
      }
    })
  },[])
  return (
    <div className="App">
      <Container className='cont-img-portada d-flex ' >
        <Image src={`./img/as.jpg`} alt='Portada'  fluid={true} className="portada"/>
        <div className='container'>
          <Image src={`./img/me.jpg`}  alt='perfil' fluid={true} className="ImgPerfil"/>
        </div>
      </Container>
       <NavbarP></NavbarP>
       <Container className='main'>
       <Acordions data={db} />
       </Container>
       <Footer />
    </div>
  )
}

export default App
