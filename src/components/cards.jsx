import React, { useState } from "react";
import "../styles/cards.css";
import Image from "react-bootstrap/Image";
const Cards = ({id ,nombre,precio,kg,img, active}) => {
  const [activo, setActivo]= useState(active)
  return (
    <div key={id}>
      <div className="container-cards" >
        <div className="card_box">
          <div className="image">
            <Image src={img} className="card-img" fluid={true}></Image>
          </div>
          <h2 className="title">{nombre}</h2>
          <h3 className="price"><strong>$</strong><p>{precio} </p>Lb {kg}</h3>
          <div className="image">
            <button className="btnAdd">+ Add</button>
          </div>
          
          <span className={activo}></span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
