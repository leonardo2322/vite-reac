import "./App.css";

// bootstrap importaciones
import NavbarP from "./components/navbar.jsx";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import Acordions from "./components/Acordion";
import Footer from "./components/footer";
import { useState } from "react";
import { ApiProvider } from "./contexts/ContextAPi";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Container className="cont-img-portada d-flex ">
          <Image
            src={`./img/as.jpg`}
            alt="Portada"
            fluid={true}
            className="portada"
          />
          <div className="container">
            <Image
              src={`./img/me.jpg`}
              alt="perfil"
              fluid={true}
              className="ImgPerfil"
            />
          </div>
        </Container>
        <NavbarP></NavbarP>
        <Container className="main">
          <Acordions />
        </Container>
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
