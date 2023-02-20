import Accordion from "react-bootstrap/Accordion";
import "../styles/acordion.css";
import { BsChevronDown } from "react-icons/bs";
import Cards from "./cards";
import { useContext } from "react";
import ApiContext from "../contexts/ContextAPi";

const Acordions = () => {

  const {frutas }= useContext(ApiContext)
 
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0" className="AcorItem1">
          <Accordion.Header className="AcorH">
            Frutas <BsChevronDown />
          </Accordion.Header>
          <Accordion.Body className="acorBody">
            <div>
            {frutas.forEach((f) => {
              <Cards key={f.id} >
                {console.log(f.nombre,f.img)}
                <div className="card_box">
                  <div className="image">
                    <img src={f.img} alt={f.nombre} className="card-img" />
                  </div>
                  <h2 className="title">{f.nombre}</h2>
                  <h3 className="price">
                    <strong>$</strong>
                    <p>{f.precio}</p>Lb {f.kg}
                  </h3>
                  <div className="image">
                    <button className="btnAdd">+ Add</button>
                  </div>

                  <span></span>
                </div>
                ;
              </Cards>;
            })}
            </div>
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="AcorH">
            Verduras <BsChevronDown />
          </Accordion.Header>
          <Accordion.Body className="acorBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="AcorH">
            Abarrotes <BsChevronDown />
          </Accordion.Header>
          <Accordion.Body className="acorBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Acordions;
