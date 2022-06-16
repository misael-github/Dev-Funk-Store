import React from 'react'
import cerebro from "../assets/statics/cerebroLoco.png"
import "../assets/css/CartItem.css";


const ItemCart = () => {
  return (
    <>
    
    <div className="carrito-item">
              <img
                src={cerebro}
                alt=""
                className="carrito-item-img"
              />
              <div className="carrito-txt">
                <h1 className="carrito-item-titulo">Cerebro loco</h1>
                <h3 className="carrito-item-precio">AR$ 150</h3>
              </div>
              <img src="borrar.png" alt="" className="carrito-item-borrar" />
            </div>
    
    </>
  )
}

export default ItemCart;
