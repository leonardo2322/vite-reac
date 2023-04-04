import Accordion from "react-bootstrap/Accordion";
import "../styles/acordion.css";
import { BsChevronDown } from "react-icons/bs";
import Cards from "./Cards";
import verduras from '../json/verduras.json'
import frutas from '../json/api.json'
import abarrotes from '../json/abarrotes.json'
const Acordions = () => {

  /* onst {frutas }= useContext(ApiContext) */
 
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0" className="AcorItem1">
          <Accordion.Header className="AcorH">
            Frutas <BsChevronDown />
          </Accordion.Header>
          <Accordion.Body className="acorBody">

          
            
            {
            frutas.map(f => (
              <Cards   
               key={f.id}
              frutas={f}
              Keyid={f.id}
              />
            ))

            }
            
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="AcorH">
            Verduras <BsChevronDown />
          </Accordion.Header>
          <Accordion.Body className="acorBody">
          {
            verduras.map(f => (
              <Cards   
               key={f.id}
              frutas={f}
              Keyid={f.id}
              />
            ))

            }
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="AcorH">
            Abarrotes <BsChevronDown />
          </Accordion.Header>
          <Accordion.Body className="acorBody">
          {
            abarrotes.map(f => (
              <Cards   
               key={f.id}
              frutas={f}
              Keyid={f.id}
              />
            ))

            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Acordions;
