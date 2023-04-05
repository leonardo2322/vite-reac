import React, { useContext, useEffect } from "react";
import "../styles/PopupCart.css";
import { BsFillXCircleFill, BsTrash, BsPencilSquare } from "react-icons/bs";
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
                <div
                  key={car.id}
                  className="container-products"
                  data-id={car.id}
                >
                  <img src={car.img} alt={car.nombre} />
                  <div className="cont-espe">
                    <h4>{car.nombre}</h4>
                    <button type="button" className="decrement">-</button>
                    <h5 className="price">
                       <input type="number" value={car.kg}  />kg
                    </h5>
                    <button type="button" className="increment">+</button>

                    <input type="text" value={car.precio} />
                    <div className="cont-btn">
                      <button type="button" className="btn-trash">
                        <BsTrash color="#b22222" size={"1.2rem"} />
                      </button>
                      <button type="button" className="btn-pencil">
                        <BsPencilSquare color="#1e90ff" size={"1.2rem"} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cont-send">
              <h4>Total De la Compra</h4>
              <input type="number" className="inp-total"/>
              <div className="cont-btn-sens">
                <button type="button">ENVIAR COMPRA</button>
                <button type="button">VACIAR CARRO</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppinCart;
