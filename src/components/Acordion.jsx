import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion'
import '../styles/acordion.css'
import {BsChevronDown }from "react-icons/bs"
import Image from "react-bootstrap/Image";
import Cards from "./cards";

const Acordions = (props) => {
  props.data.map((el)=>console.log(el.img))
  return (
    <>
    <Accordion >
      <Accordion.Item eventKey="0" className="AcorItem1">
        <Accordion.Header className="AcorH">Frutas <BsChevronDown /></Accordion.Header>
        <Accordion.Body className="acorBody">
          {props.data.map((element)=>{
            return(
              <Cards id={element.id} nombre={element.nombre}  precio={element.precio}  kg={element.kg} img={element.img} active={element.active}></Cards>
            )
            
          })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="AcorH">Verduras <BsChevronDown /></Accordion.Header>
        <Accordion.Body className="acorBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="AcorH">Abarrotes <BsChevronDown /></Accordion.Header>
        <Accordion.Body className="acorBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
