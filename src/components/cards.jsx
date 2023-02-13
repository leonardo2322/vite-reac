import React from "react";
import "../styles/cards.css";
import Image from "react-bootstrap/Image";
const Cards = () => {
  return (
    <div>
      <div className="container-cards">
        <div className="card_box">
          <div className="image">
            <Image src="../img/Fresas.png" className="card-img"></Image>
          </div>
          <h2 className="title">fresas</h2>
          <h3 className="price"><strong>$</strong><p>100</p></h3>
          <div className="image">
            <button className="btnAdd">+ Add</button>
          </div>

          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
