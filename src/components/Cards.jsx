import React from 'react'
import "../styles/cards.css";

const Cards = ({ frutas }) => {
    console.log(frutas);
    return (
        <div className='container-cards'>
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
                    <button className="btnAdd">+ Add</button>
                </div>

                {
                  frutas.active ?  <span></span> : false
                }
            </div>
        </div>
    )
}

export default Cards 
