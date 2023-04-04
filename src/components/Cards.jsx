import React, { useContext,   useState,  } from "react";
import "../styles/cards.css";
import ApiContext from "../contexts/ContextAPi";
import verduras from '../json/verduras.json'
import fruta from '../json/api.json'
import abarrotes from '../json/abarrotes.json'



const Cards = ({ frutas,Keyid }) => {
  const { db, LoadinData } = useContext(ApiContext)


  const Db = (e)=>{
    let Product
    const Id = e.target.parentElement.parentElement.getAttribute("data-id")
    if (Product = fruta.find(ele => ele.id ==Id) || verduras.find(ele => ele.id ==Id) || abarrotes.find(ele => ele.id ==Id) ){
      LoadinData(Product)
    }
   
   
  }

  

  
  const Add = (e) => {

    
    // const newData = [
    //   ...dataPopup, data
    // ]
    // setData(newData)
    
  };

  return (
    <div className="container-cards">
      <div className="card_box " data-id={`${Keyid}`} >
        <div className="image">
          <img src={frutas.img} alt={frutas.nombre} className="card-img" />
        </div>
        <h2 className="title">{frutas.nombre}</h2>
        <h3 className="price">
          <strong>$</strong>
          <p>{frutas.precio}</p>Lb {frutas.kg}
        </h3>
        <div className="image">
          <button className="btnAdd" onClick={ (e)=> Db(e) }>
            + Add
          </button>
        </div>

        {frutas.active ? <span></span> : false}
      </div>
    </div>
  );
};

export default Cards;
