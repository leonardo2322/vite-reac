import React, { useContext, useEffect } from "react";
import "../styles/PopupCart.css";
import { BsFillXCircleFill,BsTrash,BsPencilSquare } from "react-icons/bs";
import ApiContext from "../contexts/ContextAPi";
function ShoppinCart({ max, CloseSet }) {
  const { db } = useContext(ApiContext);

  // useEffect(()=>{
  //   console.log("effect")
  // },[db])
  return (
    <>
      {!max && (
        <div id="PopupCart">
          <div className="back">
            <div id="HeadPopup">
              <h1>Tu Carrito</h1>
              <button
                type="button"
                className="btn_closePopup"
                onClick={() => CloseSet(!max)}
              >
                <BsFillXCircleFill color="#D97A07" />{" "}
              </button>
            </div>
            <div id="bodyPopup">
              {db.map((car) => (
                <div key={car.id} className="container-products">
                  <img src={car.img} alt={car.nombre} />
                  <div className="cont-espe">
                    <h4>{car.nombre}</h4>
                    <button type="button">-</button>
                    <h5>
                      kg <input type="number" value={car.kg} />
                    </h5>
                    <button type="button">+</button>

                    <input type="text" value={car.precio} />
                    <div>
                      <button type="button"><BsTrash /></button>
                      <button type="button"><BsPencilSquare /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppinCart;
