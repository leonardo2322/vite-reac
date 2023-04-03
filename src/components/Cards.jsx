import React from "react";
import "../styles/cards.css";

const Cards = ({ frutas }) => {
  const Add = (e) => {
    let data = {
      nombre: e.target.parentElement.parentElement.childNodes[1].textContent,
      img: e.target.parentElement.parentElement.childNodes[0].childNodes[0].src,
      precio:
        e.target.parentElement.parentElement.childNodes[2].childNodes[1]
          .textContent,
      Gramaje: e.target.parentElement.parentElement.childNodes[2].childNodes[2].data,
      multiplo:
        e.target.parentElement.parentElement.childNodes[2].childNodes[3].data,
    };
    console.log(data);
  };

  return (
    <div className="container-cards">
      <div className="card_box">
        <div className="image">
          <img src={frutas.img} alt={frutas.nombre} className="card-img" />
        </div>
        <h2 className="title">{frutas.nombre}</h2>
        <h3 className="price">
          <strong>$</strong>
          <p>{frutas.precio}</p>Lb {frutas.kg}
        </h3>
        <div className="image">
          <button className="btnAdd" onClick={(e) => Add(e)}>
            + Add
          </button>
        </div>

        {frutas.active ? <span></span> : false}
      </div>
    </div>
  );
};

export default Cards;
