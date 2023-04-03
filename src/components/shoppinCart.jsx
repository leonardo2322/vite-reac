import React from "react";
import "../styles/PopupCart.css";
import { BsFillXCircleFill } from "react-icons/bs";
function ShoppinCart({ max, CloseSet }) {
  console.log(max);
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

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppinCart;
